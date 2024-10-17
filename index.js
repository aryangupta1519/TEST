require('dotenv').config();


const express = require('express')   //it is simillar to import express from express
const app = express()         //yha express ke sare functionality ko ek app varialble me store kara dere 
//const port = 3000             // ye humare local machine ke free port ko lera abhi... Agr hume production me port ko use karna ho to us case me is poert ko .env file me rakhte hai security purpose ke liye kyun ki is code ko hum GIT se link karenge aur port ek aisi cheeze hai jise agr koi access kar le to usase humara pura website hack kar sakta hai...

const port = process.env.PORT;
app.get('/', (req, res) => {         //yah ek call back function hai jaha req aur res genrate ho ra 
  res.send('Hello World!')
})


app.get('/Login', (req,res)=>{
  res.send("Please Enter your Credential to login")
})
app.listen(port, () => {                                              //yha humara server jis port ko listen kar ra uski render kar ra aur jaise hi hum backend ko start karenge ye execute ho jata hai
  console.log(`Example app listening on port ${port}`)      //${port} is a template literal in JavaScript, which is used to embed variables or expressions inside a string. Template literals are enclosed by backticks (`), and anything inside ${...} will be evaluated and inserted into the string.  
})