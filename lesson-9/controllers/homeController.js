// homeController.js
"use strict";


exports.sendReqVegParam=(req,res) => {
    let veg = req.params.vegetable.toUpperCase();
    res.send(`This is the ${veg} page.`);
}; 
exports.sendReqNameParam=(req,res) => {
    let nme = req.params.username.toUpperCase();
    res.send(`This is the ${nme} page.`);
}; 
exports.sendReqIDParam=(req,res) => {
    let id = req.params.courseId.toUpperCase();
    res.send(`This is the ${id} page.`);
}; 

exports.getHome=(req,res) => {
    res.send("this is the <span style='color:red'>HOME</span> page.");
}; 
exports.getAbout=(req,res) => {
    res.send("this is the <span style='color:red'>About</span> page.");
};
exports.getContact=(req,res) => {
    res.send("this is the <span style='color:red'>Contact</span> page.");
}; 

exports.postContact=(req,res) => {
    res.send("Contact info submitted!!!!!111!!");
}; 

exports.logRequestPaths = (req,res,next) => {
    console.log('request to: ${req.url}');
    next()
};
