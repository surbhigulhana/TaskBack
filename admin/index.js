




const express = require("express");
const app = express();
const cors = require("cors");
const path = require("path");
const Todo = require('./Model/Todo')
require("./Model/config");
app.use(cors());
app.use(express.json());
// random  number
function randomNum() {
  return Math.floor(Math.random() * 100) + 1;
}
app.get('/generateNumber', (req, res) => {
  const Num = randomNum();
  res.json({  number:Num });
});

// crud operation
app.post("/api/todo", async function (req, res) {
  const {Task} = req.body;
  try {
    const result = new Todo({
      Task:Task

    });
    const data = await result.save();
    console.log(data)
    res.status(200).json({ success: true, data: result });
  } catch (err) { }
});
app.get("/Todo", async (req, resp) => {
  let result = await Todo.find();
  resp.send(result);
});

app.delete("/Todo/:_id", async (req, resp) => {
  let result = await Todo.deleteOne(req.params);
  resp.send(result);
});

app.put("/Todo/:_id", async (req, resp) => {
  let result = await Todo.updateOne(req.params, { $set: req.body });

  resp.send(result);
});
app.listen(4005);
console.log("server run on 4005");
