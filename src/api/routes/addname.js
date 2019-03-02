const Router = require('koa-router')

const db = require('../db/index')


var router = new Router();
 

router.get('/',async (ctx, next) => {

    let {pag,limit} = ctx.query;  


    let num = (pag-1)*limit

    let res = await db.find2('data', null, num, limit * 1);
    let res2 = await db.find('data');
    // console.log(res2.length)

    ctx.body ={
        "code": 0,
        "msg": "",
        "count": res2.length,
        "data": res
        }  
})




module.exports = router