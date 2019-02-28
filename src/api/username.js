const Router = require('koa-router')
const body = require('koa-body')

header("content-type:text/html;charset=utf-8");


var router = new Router();

router.post('/', (ctx, next) => {
    let {user,psw,phone,mail,tar,tex} = ctx.request.body;
        
    ctx.body = ctx.request.body
    
    const mysql = require('mysql');

    //创建连接对象，并配置参数
    var connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'backstage',
        // charset:utf8
    //      headers: {
    //     'Content-Type': 'text/plain',
    //     'Content-Encoding': 'identity',
    //     'Charset': charset // 设置请求字符集编码
    // }
    });

    // 连接数据库
    connection.connect();

   

   let num = {
        user,
        psw,
        phone,
        mail,
        tar,
        tex
    }



    connection.query(`INSERT INTO username (username,password,phone,email,gender,Userdescription) VALUES ('${num.user}','${num.psw}','${num.phone}','${num.mail}','${num.tar}','${num.tex}') `, function (error, rows) {
        
    });

   // 关闭连接,释放资源
    connection.end();



})

module.exports = router