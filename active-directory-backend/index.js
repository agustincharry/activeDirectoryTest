const express = require('express');
const cors = require('cors')
const app = express();
const port = 3000;
const activeDirectoryMiddleware = require('./active-directory-module/middlewares/active-directory.middleware');

app.use(cors());
app.use(activeDirectoryMiddleware());


app.get('/', function (req, res) {
  return res.status(200).json({code: 200, message: 'OK'});
});

app.listen(port, function () {
  console.log('Example app listening on port ' + port);
});
