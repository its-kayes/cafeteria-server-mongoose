const express = require('express');
const mongoose = require('mongoose');
const foods = require('./routes/foodsRoute');
const port = process.env.PORT || 5000;


const app = express();
app.use(express.json());

// db connected with mongoose

// mongoose.connect('mongodb://localhost/', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
// })
mongoose.connect('mongodb://localhost/')
    .then(() => console.log("connection Successful"))
    .catch((err) => console.log(err))

// application route 
app.get("/foods", foods);




// default route to check
app.get('/', (req, res) => {
    res.send('Can get data from server side');
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