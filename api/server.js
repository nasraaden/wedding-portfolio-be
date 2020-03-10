const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const morgan = require('morgan');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(morgan('tiny'));

// auth middleware
const { restricted } = require('../middleware/index.js');

server.get('/', (req, res) => {
  res.status(200).json({
    api: `is up and running!`
  });
});

module.exports = server;
