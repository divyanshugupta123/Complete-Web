const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/tuto2')
    .then(() => {
        console.log("DB connected successfully");
    }).catch((err) => {
        console.log("DB not connected");
        console.log(err);
    })


// now how the interaction begin between DB and Server

