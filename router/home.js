'use strict';

const express = require('express');
const fs = require('fs');
const homeRouter = module.exports = express.Router();


let   homeController = require('../controller/home.js');

homeRouter.get('/',homeController.getHome);
homeRouter.get('/index.html',homeController.getHome);
homeRouter.get('/blog',homeController.getBlog);
homeRouter.get('/about.html',homeController.getAbout);
homeRouter.get('/contact.html',homeController.getContact);
homeRouter.get('/submit',homeController.getBlog);









