$(function () {

    //失去焦点时判断用户名是否存在数据库
    $('.user').blur(function () {
        var use = $('.layui-input-inline .user').val()
        if (use) {
            if (checkReg.name(use)) {
                $.ajax({
                    type: "get",
                    url: "/username",
                    data: {
                        'user': use
                    },
                    success: function (response) {
                        console.log(response)
                        if (response == 'no') {
                            $('.uname').css('color', 'red')
                            $('.uname').html('用户名已存在')
                        } else if (response == 'yes') {
                            $('.uname').css('color', '#58bc58')
                            $('.uname').html('可以注册')
                        };
                    }
                })
            } else {
                $('.uname').css('color', 'red')
                $('.uname').html('用户名错误')
            }
        } else {
            $('.uname').css('color', 'red')
            $('.uname').html('用户名不能为空')
        }
    })

    //正则判断密码是否合格
    $('.psw').blur(function () {
        var psw = $('.psw').val()

        console.log(psw)
        if (psw) {
            if (checkReg.psweasy(psw)) {
                $('.upsw').css('color', 'red')
                $('.upsw').html('密码通过')
            } else {
                $('.upsw').css('color', 'red')
                $('.upsw').html('密码不能少于6位')
            }
        } else {
            $('.upsw').css('color', 'red')
            $('.upsw').html('密码不能为空')
        }
    })

    //判断两次密码是否一致

    $('.queinp').blur(function () {
        var psw1 = $('.queinp').val()
        var psw = $('.psw').val()
        var tex = $('.upsw').text()
        console.log(psw1, psw)
        if (psw1 && psw) {

            if (tex == '密码通过') {
                if (psw != psw1) {
                    $('.quer').css('color', 'red')
                    $('.quer').html('两次密码不一致')
                } else {
                    $('.quer').css('color', 'red')
                    $('.quer').html('两次密码通过')
                }
            } else {
                 $('.quer').css('color', 'red')
                $('.quer').html('上行密码未通过')
            }
        } else {
            $('.quer').css('color', 'red')
            $('.quer').html('两次密码不能为空')
        }




    })

    //判断手机号码

    $('.hone').blur(function () {
        var hone = $('.hone').val()

        console.log(hone)
        if (hone) {
            if (checkReg.tel(hone)) {
                $('.uhone').css('color', 'red')
                $('.uhone').html('手机号码通过')
            } else {
                $('.uhone').css('color', 'red')
                $('.uhone').html('请输入正确手机号码')
            }
        } else {
            $('.uhone').css('color', 'red')
            $('.uhone').html('号码不能为空')
        }
    })

    //判断邮箱

    $('.mail').blur(function () {
        var mail = $('.mail').val()

        console.log(mail)
        if (mail) {
            if (checkReg.email(mail)) {
                $('.umail').css('color', 'red')
                $('.umail').html('邮箱通过')
            } else {
                $('.umail').css('color', 'red')
                $('.umail').html('请输入正确邮箱')
            }
        } else {
            $('.umail').css('color', 'red')
            $('.umail').html('邮箱不能为空')
        }
    })

    // //点击添加时将用户信息添加到数据库 
    $('.btn').on('click', function () {

        //获取输入框内容
        var user = $('.layui-input-inline .user').val()
        var psw = $('.layui-input-inline .psw').val()
        var phone = $('.layui-input-inline .hone').val()
        var mail = $('.layui-input-inline .mail').val()
        var tar = $('.layui-input-block .tar option:checked').text()
        var gl = $('.layui-input-block .gl option:checked').text()
        var tex = $('.layui-input-block .tex').val()
      



        //获取提示信息

            // $('.uname').html('可以注册')
            // $('.quer').html('两次密码通过')
            // $('.umail').html('邮箱通过')

        var uname= $('.uname').text()
        var quer=  $('.quer').text()
        var umail= $('.umail').text()


        let udata = `user=${user}&psw=${psw}&phone=${phone}&mail=${mail}&tar=${tar}&gl=${gl}&tex=${tex}`
        console.log(udata)
        if (user && psw && phone && mail && tar && tex) {
            if (uname == '可以注册'&&quer=='两次密码通过'&&umail=='邮箱通过') {
                // console.log('123')
                let xhr = new XMLHttpRequest();
                xhr.open('post', '/username', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                xhr.send(udata)

                $('.layui-input-inline .user').val('')    
                $('.layui-input-inline .psw').val('')
                $('.layui-input-inline .hone').val('')
                $('.layui-input-inline .mail').val('')
                $('.layui-input-block .tar option:checked ').text('')
                $('.layui-input-block .tex').val('')
                $('.layui-input-inline .queinp').val('')    
            } else {
                $('.uname').html('用户名已存在')
            }


        } else {
            console.log('请认真填写')
        }

    })


    $('.layui-layer-btn0').on('click', function () {
        console.log('123')
    })







})