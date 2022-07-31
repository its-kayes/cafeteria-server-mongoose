const mongoose = require('mongoose');
const foodSchema = mongoose.Schema(
  {
    title: String,
    category: String,
    desc: String,
    img: String,
    price: Number,
    rating: Number,
    status: Boolean,
  }
  // { timestamps: true }
);

// export default mongoose.models.Food ||
//   mongoose.model("Food", foodSchemas);


module.exports = foodSchema;