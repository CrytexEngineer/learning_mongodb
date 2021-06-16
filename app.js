const {MongoClient} = require('mongodb');
const uri = 'mongodb://127.0.0.1:27017';
const dbName = 'carrot_dev';

const client = new MongoClient(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

client.connect((error, client1) => {
    if (error) {
        return console.log('Koneksi Gagal');
    }
    console.log('Koneksi berhasil');


//pilih database
    const db = client1.db(dbName)


})
