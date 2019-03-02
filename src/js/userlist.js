$(function () {

    let udata = "limit=10&pag=1"
    let xhr = new XMLHttpRequest();
    xhr.open('get', '/addname?' + udata, true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
    xhr.send()

    




    layui.use('table', function () {
        var table = layui.table;

        //监听表格复选框选择
        table.on('checkbox(demo)', function (obj) {

        });
        //监听工具条
        table.on('tool(demo)', function (obj) {
            var data = obj.data;

     
           if (obj.event === 'del') {
                layer.confirm('真的删除行么', function (index) {
                    obj.del();
                    layer.close(index);
                    // console.log('1',data.user)
                   
                    // let xhr1 = new XMLHttpRequest();
                    // xhr1.open('post', '/delename', true);
                    // xhr1.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
                    // xhr1.send(data._id)
                    $.ajax({
                        type: "post",
                        url: "/delename",
                        data: "user="+data.user,
                        success: function (response) {
                            
                        }
                    });
                });
            } else if (obj.event === 'edit') {
                //  console.log('2',data._id)
               layer.alert('编辑行：<br>' + JSON.stringify(data))
               window.open('yonghubianji.html?user=' + data.user)
            }
        });





        table.render({
            elem: '.layui-hide',
            height: '480px',
            url: '/addname',
            count: 100,
            limit: 10,
            limits: [10, 20, 30, 40, 50],
            cols: [
                [{
                    type: 'numbers',
                    field: 'xh',
                    width: 80,
                    title: '序号',
                }, {
                    field: '_id',
                    width: 80,
                    title: 'ID',
                    sort: true
                }, {
                    field: 'user',
                    width: 130,
                    title: '用户名'
                }, {
                    field: 'psw',
                    width: 120,
                    title: '密码',
                    sort: false
                }, {
                    field: 'phone',
                    width: 120,
                    title: '电话'
                }, {
                    field: 'mail',
                    title: 'E-mail',
                    minWidth: 120
                }, {
                    field: 'tar',
                    width: 80,
                    title: '性别',
                    sort: true
                },  {
                    field: 'gl',
                    width: 80,
                    title: '管理权限',
                    sort: false
                },{
                    field: 'tex',
                    width: 300,
                    title: '用户描述',
                    sort: false
                }, , {
                    field: 'classify',
                    width: 155,
                    title: '操作',
                    toolbar: '#barDemo'
                }]
            ],
            id: 'idTest',
            page: true,

        });

        var $ = layui.$,
            active = {
                getCheckData: function () { //获取选中数据
                    var checkStatus = table.checkStatus('idTest'),
                        data = checkStatus.data;
                    layer.alert(JSON.stringify(data));
                },
                getCheckLength: function () { //获取选中数目
                    var checkStatus = table.checkStatus('idTest'),
                        data = checkStatus.data;
                    layer.msg('选中了：' + data.length + ' 个');
                },
                isAll: function () { //验证是否全选
                    var checkStatus = table.checkStatus('idTest');
                    layer.msg(checkStatus.isAll ? '全选' : '未全选')
                }
            };

        $('.demoTable .layui-btn').on('click', function () {
            var type = $(this).data('type');
            active[type] ? active[type].call(this) : '';
        });
    });



})