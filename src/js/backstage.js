$(function () {

   
    
    $('.layui-btn').on('click', function () {


        var user = $('.layui-input-block .user').val()
        var psw = $('.layui-input-block .psw').val()
        var phone = $('.layui-input-inline .hone').val()
        var mail = $('.layui-input-block .mail').val()
        var tar = $('.layui-input-block .tar option:checked').text()
        var tex = $('.layui-input-block .tex').val()

      
        let data = `user=${user}&psw=${psw}&phone=${phone}&mail=${mail}&tar=${tar}&tex=${tex}`
        
        let xhr = new XMLHttpRequest();
        xhr.open('post', '/username', true);
        xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded')
        xhr.send(data)
    })

    







})