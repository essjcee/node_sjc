const express = require('express');
const app = express();
app.get('/',(req,res)=>{
  res.sendFile(__dirname + '/index.html');
});
app.listen(3019);
console.log("Listening on port 3019");
