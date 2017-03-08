'use strict';
const fs = require('fs');
// var xtpl = require('xtpl');
// xtpl.renderFile('./x.xtpl',{
//     x:1
// },function(error,content){

// });
let xtpl = require('xtpl');

let homeController = module.exports;

homeController.getHome=(req,res)=>{
    fs.readFile('./views/index.html','utf8',(err,data)=>{
        res.send(data);
    })
}
homeController.getBlog=(req,res)=>{
    fs.readFile('./views/post.html','utf8',(err,data)=>{
        res.send(data);
    })

//    xtpl.renderFile()



}
homeController.getAbout=(req,res)=>{
    fs.readFile('./views/about.html','utf8',(err,data)=>{
        res.send(data);
    })
}
homeController.getContact=(req,res)=>{
    fs.readFile('./views/contact.html','utf8',(err,data)=>{
        res.send(data);
    })
}