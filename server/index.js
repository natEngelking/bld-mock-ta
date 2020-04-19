const express = require('express');
const cors = require('cors')
const db = require('./db/db.js')

const app = express();
const port = 8080;

app.listen(port, () => console.log(`Server is running on port ${port}`));

//requesting cow info
app.get('/api/cow', async (req, res) => {
try {
  let result = await Cow.find();
  res.send(result);
} catch (err) {
  res.status(404).send(err);
}
})

//need more cow(bell)
app.post('/api/cow', aysnc (req, res) => {
  try {
    //???
   let result = Cow.create({
      id: req.body.id,
      name: req.body.name,
      description: req.body.description
    });
    let result = await cow.save();
    response.send(result);
  } catch (err) {
    res.status(404).send(err);
  }
});