const Router = require('koa-router')
const body = require('koa-body')
// const mongodb = require('mongodb');
const db = require('../db/index')



var router = new Router();
 
router.post('/',async (ctx, next) => {
    let {user,psw,phone,mail,tar,gl,tex} = ctx.request.body;       
    
    let res = await db.insert('data',{user,psw,phone,mail,tar,gl,tex})

    ctx.body = res

    // const mysql = require('mysql');
    // //创建连接对象，并配置参数
    // var connection = mysql.createConnection({
    //     host: 'localhost',
    //     user: 'root',
    //     password: '',
    //     database: 'backstage',
    //     charset:'UTF8'
    // });

    // 连接数据库
//     connection.connect();
//    let num = {
//         user,
//         psw,
//         phone,
//         mail,
//         tar,
//         tex
//     }
//     let sql = `INSERT INTO username (username,password,phone,email,gender,Userdescription) VALUES ('${num.user}','${num.psw}','${num.phone}','${num.mail}','${num.tar}','${num.tex}') `
//    console.log(sql)
//     connection.query("set names 'utf8'" + sql, function (error, rows) {    
//     });
//     connection.end();
   
   
    // connection.query(`INSERT INTO username (username,password,phone,email,gender,Userdescription) VALUES ('${num.user}','${num.psw}','${num.phone}','${num.mail}','${num.tar}','${num.tex}') `, function (error, rows) {    
    // });
    // connection.end();

//     connection.query('SELECT * FROM username', function (error, rows) {  
//         console.log(rows)
//     });
//     connection.end();

//   ctx.body = "数据上传成功"

})



router.get('/',async (ctx, next) => {

    let {user} = ctx.query;

    let res = await db.find('data', { user });

    if(res.length>0){
        ctx.body = 'no'
    }else{
        ctx.body = 'yes'
    }
})

module.exports = router