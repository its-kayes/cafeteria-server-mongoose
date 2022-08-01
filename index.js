const express = require('express');
// const { MongoClient } = require('mongodb');
const mongoose = require('mongoose');
const foods = require('./routes/foodsRoute');
require('dotenv').config();
const port = process.env.PORT || 5000;


const app = express();
app.use(express.json());


// const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.s5lkv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`;

// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });



// db connected with mongoose

// mongoose.connect('mongodb://localhost/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })


mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.h3ft8.mongodb.net/fastFood?retryWrites=true&w=majority`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("connection with moongodb is Successful"))
    .catch((err) => console.log(err))

// mongoose.connect('mongodb://localhost/')
//     .then(() => console.log("connection Successful"))
//     .catch((err) => console.log(err))

// application route 
app.use("/foods", foods);




// default route to check
app.get('/', (req, res) => {
    res.send('Can get data from server side');
});

// test to get data
app.get('/test', (req, res) => {
    res.send({
        status: "Working"
    });
});


// error handler
function errorHandler(err, req, res, next) {
    if (res.headersSent) {
        return next(err)
    }
    res.status(500).json({ error: err });
}



app.listen(port, () => {
    console.log(`Server Running on port ${port}`);
})