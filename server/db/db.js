const mongoose = require('mongoose');
const dbPath = 'mongodb://localhost/mocktadb';

mongoose.connect(dbPath);
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error'));

const Schema = new mongoose.Schema({
  id: Number,
  name: String,
  description: String
});

let Cow = mongoose.model('Cow', Schema);

//make dymanic
let buttercup = new Cow({
  id: 1,
  name: 'Buttercup',
  description: 'a herbaceous plant with bright yellow cup-shaped flowers, common in grassland and as a garden weed. All kinds are poisonous and generally avoided by livestock.'
})
buttercup.save();

module.exports = mongoose;