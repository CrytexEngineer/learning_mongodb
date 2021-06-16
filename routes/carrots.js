const express = require('express')
const router = express.Router()
const Carrot = require('../models/carrot')
router.get('/', async (req, res) => {
    try {
        const carrots = await Carrot.find()
        res.json(carrots)
    } catch (err) {
        res.status(500).json({messege: err.message})
    }
});

router.get('/:id', getCarrot, function (req, res) {

    res.send(res.carrot)
});


router.post('/', async (req, res) => {

    try {
        const carrot = new Carrot({
            total_balance: req.body.total_balance,
            issued_date: req.body.issued_date,
            expiry_date: req.body.expiry_date
        })
        console.log(req)
        const newCarrot = await carrot.save()
        res.status(201).json(newCarrot)
    } catch (err) {
        res.status(400).json({messege: err.message})
    }
});

router.patch('/:id', getCarrot, async (req, res) => {

    if (req.body.total_balance != null) {
        res.carrot.total_balance = req.body.total_balance
    }
    res.carrot.issued_date = req.body.issued_date
    res.carrot.expiry_date = req.body.expiry_date
    try {
        const updatedCarrot = await res.carrot.save()
        res.json(updatedCarrot)
    } catch (err) {
        res.status(400).json({messege: err.message})
    }

});

router.delete('/:id', getCarrot, async (req, res) => {
    try {
        await res.carrot.remove()
        res.send({messege: "Data Successfully Deleted"})
    } catch (err) {
        res.status(500).json({messege: err.message})
    }
});

async function getCarrot(req, res, next) {
    let carrot
    try {
        carrot = await Carrot.findById(req.params.id)
        if (carrot == null) {
            return res.status(404).json({messege: 'Cannot find subscriber'})
        }

    } catch (err) {
        return res.status(500).json({messege: err.message})
    }
    res.carrot = carrot
    next()
}

module.exports = router