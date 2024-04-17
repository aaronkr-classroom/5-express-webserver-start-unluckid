// homeController.js
"use strict";

/**
 * Listing 10.2
 */
exports.respondWithName1 = (req, res) => {
    res.render('index'); 
  };
  
/**
 * Listing 10.3
//  */
// exports.getHome = (req,res) =>{} // "/" index
// exports.getContact = (req,res) =>{} // "/contact" GET method
// exports.getPost = (req,res) =>{} // "/POST" POST method

exports.respondWithName = (req, res) => {
  let paramsName = req.params.myName; // Extracting the name from the request
  
  res.render('index', { 
      name: paramsName,
      people: {
          usa: {
              einstein: "Albert Einstein",
              musk: "Elon Musk",
              jobs: "Steve Jobs"
          },
          korea: {
              psy: "사이다",
              kim: "김예수",
          },
          meccio: { // Corrected property name
              dawda: "dwdaw",
          }
      }
      });
};

