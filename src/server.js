const express = require('express')
const routes = require('./routes/index')
const app = express();

app.use(routes)

app.listen(3000,()=>{
    console.log('Hello world!')
})