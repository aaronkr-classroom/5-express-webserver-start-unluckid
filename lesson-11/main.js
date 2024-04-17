// main.js
"use strict";

// @TODO: 웹 서버를 만들고 실행한다.
//상수나 변수 모두 정의 (const)
// 3000번 포트로 리스닝 설정
const port =3003,

    express = require('express'),
    layouts = require('express-ejs-layouts'),
    homeController =require('./controllers/homeController'),
    errorController= require('./controllers/errorController'),
    app = express();
    //2단계 앱 설정( set함수, use함수)
    app.set("port",process.env.PORT ||port);
    app.set("view engine","ejs");

    app.use(layouts);
    app.use(express.static("public"));

    //get 라우트 먼저 그다음에 post라우트
    //app.get("/",homeController.gethome);
    
    app.get("/name/:myName", homeController.respondWithName);
    
    app.get("/test", (req,res)=>{
        
        res.sendFile(`./public/test.html`,{
            root:'./'
       });
    });

    app.use(errorController.logErrors);
    app.use(errorController.resNotFound);
    app.use(errorController.resInternalError);

    //마지막 listen 함수
    app.listen(app.get("port"),() => {
        console.log(`Server at: http://localhost:${app.get("port")}`);
    });