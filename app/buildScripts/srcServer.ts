/**
 * srcServer.js will server the files in our src directory
 * this act as DEV server
 */
import * as express from 'express';
import * as path   from 'path';
import * as open   from 'open';

const port = 3000;
const __dirname = path.resolve('');
path.resolve();
var app = express();
// Root path
app.get('/', function(req,res) {
  res.sendFile(path.join(__dirname,'/app/index.html'));
});

/**
 * Error logging
 */
app.listen(port,function(err){
  if(err)
  {
    console.log(err);
  } else {
    open('http://localhost:'+port);
  }
});
