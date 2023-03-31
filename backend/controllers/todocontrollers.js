const Todo=require('../models/Todo')

const gettodo=async(req,res)=>{
    try {
        const todos = await Todo.find();
        res.json(todos);
      } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
      }
}

const posttodo=async(req,res)=>{
    const { title, link } = req.body;
    const todo_all = await Todo.find({});
    const todo = new Todo({
      title,
      link,
      completed: false,
      position:  todo_all.length+1, 
    });
    try {
      const result = await todo.save();
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
}

const patchtodo=async(req,res)=>{
    const { id } = req.params;
    const { completed } = req.body;
    console.log(completed);
    try {
      const result = await Todo.findByIdAndUpdate(id, { completed });
      res.json(result);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
}

const puttodo=async(req,res)=>{
  try {
      const {data} = req.body;
      const todo = await Todo.find({});
      console.log(data);
      for(const i in todo){
        const chg = await Todo.findByIdAndUpdate(todo[i]._id,data[i]);
      }
      res.status(200).json({todo});
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Server error" });
    }
}


module.exports={gettodo,posttodo,patchtodo,puttodo}