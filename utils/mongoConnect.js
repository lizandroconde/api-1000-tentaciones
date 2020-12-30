const mongoose = require('mongoose');

const mongoConnect = () => new Promise((resolve, reject) => {
    mongoose.connect('mongodb+srv://lizandroconde:lizandroconde@cluster0.obhah.mongodb.net/1000tentaciones?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true,useFindAndModify:true }).then(() => {
        resolve('MongoDB is working');
    }).catch(err => {
        reject(err);
    })
});

module.exports = mongoConnect;