const Router = require('koa-router')

const db = require('../db/index')


var router = new Router();

router.post('/',async (ctx, next) => {
    // console.log(ctx.request.body)
    let {user} = ctx.request.body;       
console.log(user)
    let res = await db.delete('data',{user:user})

    ctx.body = res


})

module.exports = router