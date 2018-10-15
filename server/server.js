const express = require('express');
const helmet = require('helmet');
const volleyball =  require('volleyball');

const app = express();

app.use(helmet());
app.use(volleyball);


app.listen(3000, ()=> console.log('Server is Running at locathost:3000'));