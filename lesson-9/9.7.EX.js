// 9.7.EX.js
"use strict";

// @TODO: 포트 번호를 지정한다
const port = 3000,
express = require("express"),
homeController = require('/workspaces/5-express-webserver-start-unluckid/lesson-9/controllers/homeController.js')
,
    app = express();
/**
 * Listing 9.5 (p. 149)
 * 요청 본문으로부터 포스팅된 데이터 캡처
 *
 * app.use([path], callback, [callback])
 */
app.use(express.urlencoded({
    extended: false
  }));
  
  // 다음 미들웨어 또는 라우트 함수를 정의합니다.
 
    
app.use(
    express.json()
); 
app.use(
    homeController.logRequestPaths
); 

/**
 * Listing 9.7 (p. 153)
 * 컨트롤러 함수의 참조를 통한 콜백의 대체
 *
 * app.get(path, [callback])
 * app.post(path, [callback])
 */
app.get("/items/:vegetable", homeController.sendReqVegParam);
            
app.get("/users/:username", homeController.sendReqNameParam);

app.get("/idtems/:courseId", homeController.sendReqIDParam);

/**
 * 다른 라우트 수정
 */


// TODO: homeController에서 getHome을 가져와 사용한다
app.get('/', homeController.getHome);

// TODO: homeController에서 getContact을 가져와 사용한다
app.get('/contact', homeController.getContact);

// TODO: homeController에서 postContact을 가져와 사용한다
app.post('/contact', homeController.postContact);

// TODO: 포트 번호를 지정한다. 서버가 실행되면 콘솔에 로그를 남긴다.
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
