const express = require('express');
const path = require('path');
const router = express.Router();

const querySpec = {
    query: "SELECT * FROM root r WHERE r.available=@available",
    parameters: [
      {
        name: "@available",
        value: true
      }
    ]
}
const dogWalkers = await this.taskDao.find(querySpec);

router.get('/', function(req, res, next) {
  res.render("owner", {tasks: dogWalkers});
});

module.exports = router;
