const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();
const foodSchema = require("../schemas/foodSchema");
const Foods = new mongoose.model("Food", foodSchema);



// get by id
router.get('/:id', async (req, res) => {

})

// get all foods
router.get('/', async (req, res) => {
    res.send({
        status: "Foods GET API working"
    })
})

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


router.post("/", async (req, res) => {
    const newFoods = new Foods(req.body);
    await newFoods.save((err) => {
        if (err) {
            res.status(500).json({
                error: "Food part Server Side Error",
            });
        } else {
            res.status(200).json({
                message: "Food Data insert!",
            });
        }
    });
});


module.exports = router;