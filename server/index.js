const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 5000;
const badges = require('./data/badges');
const gyms = require('./data/gyms');
const trainers = require('./data/trainers');

// Serve static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// Routes (move them to a folder)
app.get('/api/badges', (req, res) => {
  res.json(badges);
  console.log('Sent badges');
});

app.get('/api/gyms', (req, res) => {
  res.json(gyms);
  console.log('Sent gyms');
});

app.get('/api/trainers/:trainerId', (req, res) => {
  const trainer = trainers.find(t => t.id === Number(req.params.trainerId));
  res.json(trainer);
  console.log(`Sent trainer id:${trainer.id}`);
});

app.listen(port);

console.log(`Poke-app api listening on ${port}`);
