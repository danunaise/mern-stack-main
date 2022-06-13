const express = require('express');
const Routes = express.Router();

const { create, getAllblogs, post } = require('../controllers/blog.controller');

Routes.post('/create',create);
Routes.get('/blogs',getAllblogs);
Routes.get('/post/:slug',post);

module.exports = Routes;