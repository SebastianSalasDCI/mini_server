const express = require('express');
const path = require('path');

const filePath = path.join(__dirname, '/client', '/build' ,'/index.html');
const buildPath = path.join(__dirname, '/client', '/build');

//Create express application
const app = express();
// Add configuration parameters.
app.use(express.static(buildPath))

//---- Create behaviour of the express application - start ----
app.get('/api/getinfo',(req,res)=>{
  //Make database call and get information
  const data = {
    name:"Lucas",
    age: 30,
    address: "strasse 120, 21345, Berlin",
    nationality: "German"
  }

  console.log('data has been sent')

  res.json(data)

})


app.get('*',(req,res)=>{

  //res.send('Hi, welcome to my express application');
  res.sendFile(filePath)

});

//---- Create behaviour of the express application - end ---- 



// Assign the port and Start listening to this port
const port = 4000;
app.listen(port);
console.log('Express Server Running')


