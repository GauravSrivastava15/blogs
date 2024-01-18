const app = require("./app");
const dotenv = require("dotenv");
const express = require('express')
const connectDB = require("./config/db");
const path = require("path")
// dotenv config
dotenv.config();

const __dirnames = path.resolve()

// mongodb connect
connectDB();

app.listen(process.env.PORT, () => {
  console.log(`server is running on localhost ${process.env.PORT}`);
});

app.use(express.static(path.join(__dirnames, '/frontend/build')))

app.get('*', (req,res) =>{
  res.sendFile(path.join(__dirnames, 'frontend', 'build', 'index.html'))
})


