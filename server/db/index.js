const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { Pool } = require('pg');
const app = express();

const pool = new Pool();
module.exports = {
  query: (text, params, callback) => pool.query(text, params, callback),
};
