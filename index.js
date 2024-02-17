const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("hello world");
});

app.use(express.json());


let data = [];


app.post("/data", (req, res) => {
  const newData = req.body;
  data.push(newData);
  res.send("Data berhasil ditambahkan");
});


app.put("/data/:id", (req, res) => {
  const id = req.params.id;
  const newData = req.body;
  data[id] = newData;
  res.send("Data berhasil diubah");
});


app.get("/data", (req, res) => {
  res.json(data);
});


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
