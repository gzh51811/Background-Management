const Router = require('koa-router')
const koa = require('koa');
const body = require('koa-body')

var router = new Router();

const routers =require('./username')
const routersa = require('./addname') 
const routersb =require('./delename')      
 
router.use(body({
    multipart: true,
    keepExtensions:true,
}))
router.use('/username', routers.routes())
router.use('/addname', routersa.routes())
router.use('/delename', routersb.routes())
module.exports =router