const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
    title: String,
    link: String,
    completed: Boolean,
    position: Number,
  });
  
  const Todo = mongoose.model("Todo", todoSchema);
  module.exports = Todo;