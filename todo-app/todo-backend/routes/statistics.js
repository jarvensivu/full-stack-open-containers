const express = require('express');
const { getAsync } = require('../redis')
const router = express.Router();

router.get('/', async (_, res) => {
  const numberOfTodos = Number(await getAsync('numberOfTodos')) || 0
  res.json({ "added_todos": numberOfTodos });
});

module.exports = router;
