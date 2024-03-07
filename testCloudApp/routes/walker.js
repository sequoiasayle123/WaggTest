const express = require('express');
const path = require('path');
const router = express.Router();

const querySpec = {
    query: "SELECT * FROM root r WHERE r.needWalker=@needWalker",
    parameters: [
      {
        name: "@needWalker",
        value: true
      }
    ]
  };
const dogOwners = await this.taskDao.find(querySpec);

router.get('/', function(req, res, next) {
  res.render("walker", {tasks: dogOwners});
});

module.exports = router;


