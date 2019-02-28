const Router = require('koa-router')
const koa = require('koa');
const body = require('koa-body')

var router = new Router();

const routers =require('./username')


router.use(body({
    multipart: true,
   
}))
router.use('/username', routers.routes())
module.exports =router