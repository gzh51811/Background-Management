const koa = require('koa');
const static = require('koa-static')
const app =new koa();

const routers = require('./api/index')

//==========创建资源服务器及路由============================================================


//创建资源服务器

app.use(static('./'))
app.use(routers.routes())


app.listen(10086, () => {
   console.log('服务器启动成功')
})

