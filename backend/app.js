const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const router = require("./routes/todoroutes");
const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://localhost:27017/todo-list', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('Failed to connect to MongoDB', err));

app.use('/api/todos', router);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
