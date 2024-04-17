// main.js
"use strict";
const port = 3007,
express = require("express"),
layout = require('express-ejs-layouts'),
homeController = require('/workspaces/5-express-webserver-start-unluckid/lesson-10/controllers/homeController.js'),
app = express();

app.set('view engine', 'ejs');
app.set('views', name + '/views');

app.use(layout);

app.get('/', (req, res) => {
    const data = {
      title: 'Hello World',
      message: 'This is a simple example of MVC pattern in Express.js'
    };
  
    // 뷰 렌더링 및 응답 전송
    res.render('index', data);
  });
app.get("/users/:name", homeController.respondWithName);
app.get("/user2/:name", homeController.respondWithName2);

const PORT = 3007;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });