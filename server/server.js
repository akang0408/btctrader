const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');

const PORT = 3000;

app.use(express.static('hoidy'));
app.use(bodyParser());

if (process.env.NODE_ENV !== 'development') {
  app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../hoidy/index.html'));
  });

  app.get('/build/bundle.js', (req, res) => {
    res.status(200).sendFile(path.join(__dirname, '../build/bundle.js'));
  });
}
app.get('/', (req, res) => {
  res.status(200).send('HELLO FROM SERVER');
});

app.get('/api', (req, res) => {
  res.status(200).send('API');
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
