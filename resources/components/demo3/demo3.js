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
       
    }, main);
})