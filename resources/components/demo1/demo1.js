/*
    author：junyang9
    time：2018/5/20
*/
require.config(requireConfig); // require配置对象写在了require.js库文件的最后，在这里也需要用config配置方法引用一下
require(['jquery', 'layui', 'ko'], function($, layui, ko) {
    var layer = layui.layer;
    var main = document.getElementById('main');
    ko.cleanNode(main);
    ko.applyBindings({
        myItems: [
            {id: 1, username: 'Lucy', age: 25},
            {id: 2, username: 'LiLei', age: 24},
            {id: 3, username: 'HanMeiMei', age: 23},
            {id: 4, username: 'Tom', age: 22},
            {id: 5, username: 'Jhon', age: 21},
        ]
    }, main);
})