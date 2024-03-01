const express = require('express');
const path = require('path');
const router = express.Router();

// router.use('/stylesheets', (req, res, next) => {
//   const filePath = path.join(__dirname, '../public/stylesheets', req.url);
//   fs.readFile(filePath, (err, data) => {
//     if (err) {
//       return next(err);
//     }
//     res.setHeader('Content-Type', 'text/css');
//     res.send(data);
//   });
// });

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views/loginpage.html'));
});

module.exports = router;
