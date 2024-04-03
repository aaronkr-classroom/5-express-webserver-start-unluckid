// homeController.js
"use strict";

/**
 * Listing 10.2 (p. 159)
 * 컨트롤러 동작에 의한 뷰 렌더링
 */



exports.respondWithName = (req, res) => {
    const { name } = req.params; 
    res.render('index', { name }); // customView라는 EJS 뷰를 렌더링하고 이름을 전달
  };

/**
 * Listing 10.3 (p. 160)
 * 뷰로의 라우트 매개변수 전달
 */
exports.respondWithName2 = (req, res) => {
    const { name } = req.params; // 요청에서 이름을 가져옴
    const localVariable = 'Some local data'; // 지역 변수 할당
    const dynamicContent = `Hello, ${name}! Welcome to our website.`;
    // 지역 변수와 이름을 뷰에 전달하여 렌더링
    res.render('layout', { name, localVariable, body: dynamicContent });
  };

