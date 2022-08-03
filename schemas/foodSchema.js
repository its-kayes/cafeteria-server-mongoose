const mongoose = require("mongoose");
const foodSchema = mongoose.Schema(
  {
    title: String,
    category: String,
    desc: String,
    img: String,
    price: Number,
    rating: Number,
    quantity: Number,
    status: Boolean,
  },
  { timestamps: true }
);

// export default mongoose.models.Food ||
//   mongoose.model("Food", foodSchemas);


module.exports = foodSchema;




// const mongoose = require("mongoose");

// const todoSchema = mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   description: String,
//   status: {
//     type: String,
//     enum: ["active", "inactive"],
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = todoSchema;