const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const foodSchema = require("../schemas/foodSchema");
const Foods = new mongoose.model("Food", foodSchema);



// get by id
router.get('/id', async (req, res) => {
    try {
        const data = await Foods.find({_id: "62c2d2547477d4c3221faa17" });
        res.send({ data, message: 'Successfully loaded products', success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Server side error', success: false });
    }
})

// get all foods 
router.get("/", async (req, res) => {
    // (Working)
    try {
        const data = await Foods.find({_id: "62c2d2547477d4c3221faa17"});
        res.send({ data, message: 'Successfully loaded products', success: true });
    } catch (error) {
        res.status(500).send({ error: error, message: 'Server side error', success: false });
    }
})


// Single Data Post (Working)
router.post("/", async (req, res) => {
    const newFoods = new Foods(req.body);
    await newFoods.save((err) => {
        // await Foods(req.body).save((err) => {
        if (err) {
            res.status(500).json({
                error: "Food part Server Side Error",
            });
        } else {
            res.status(200).json({
                message: `${req.body.title} insert in to Database!`,
            });
        }
    });
});

module.exports = router;





// router.get("/", async (req, res) => {
//     await Foods.find({}, function (err, docs) {
//         if (!err) {
//             res.status(200).json({
//                 result: docs
//             })
//         }
//     });


//     (Working)
//     let data = await Foods.find({})
//     res.send({ data, status: "success" });



//     res.send({
//         status: "Foods GET API working"
//     })

//     await Foods.find({ status: "true" })
//         .select({
//             _id: 0,
//             __v: 0,
//             date: 0,
//         })
//         .limit(2)
//         .exec((err, data) => {
//             if (err) {
//                 res.status(500).json({
//                     error: "There was a server side error!",
//                 });
//             } else {
//                 res.status(200).json({
//                     result: data,
//                     message: "Success",
//                 });
//             }
//         });
// })


// post data on foods
// router.post('/', async (req, res) => {
//     let newFoods = new Foods(req.body);
//     await newFoods.save((err) => {
//         if (err) {
//             res.status(500).json({
//                 error: "Food part Server Side Error"
//             });
//         }
//         else {
//             res.status(200).json({
//                 massage: "Food Data post ",
//             });
//         }
//     })
// })


