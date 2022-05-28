'use strict';

// 모듈 
const express = require('express');
const app = express();

const PORT = 3000;

// 라우팅 
const home = require('./src/routes/home');

// 앱 셋팅
app.set('views' , './src/views');
app.set('view engine' , 'ejs');

app.use('/',home);

// __dirname => C:\Users\MINI\OneDrive\바탕 화면\GitHub\backend\app
app.use(express.static(`${__dirname}/src/public`));

module.exports = app;

// app.listen(PORT, function(){
//     console.log('정상 실행');
// });

