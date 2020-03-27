const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const path = require('path');
const fetchApi = require('./fetchApi.js');

const PORT = 3000;

app.use(express.static('build'));
app.use(bodyParser());

// if (process.env.NODE_ENV !== 'development') {
app.get('/', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../client/index.html'));
});

app.get('/build/bundle.js', (req, res) => {
  res.status(200).sendFile(path.join(__dirname, '../build/bundle.js'));
});
// }

app.use('/api', fetchApi);

app.get('/', (req, res) => {
  res.status(200).send('HELLO FROM SERVER');
});


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
