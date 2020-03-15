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
const { restricted } = require('../middleware/restricted.js');

// routers
const authRouter = require('../routers/auth-router.js');
const usersRouter = require('../routers/users-router.js');
const postsRouter = require('../routers/posts-router.js');

server.get('/', (req, res) => {
  res.status(200).json({
    api: `is up and running!`
  });
});

server.use('/api/auth', authRouter);
server.use('/api/users', restricted, usersRouter);
server.use('/api/posts', postsRouter);

module.exports = server;
