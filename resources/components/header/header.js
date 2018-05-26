/*
    author：junyang9
    time：2018/5/20
*/
require.config(requireConfig); // require配置对象写在了require.js库文件的最后，在这里也需要用config配置方法引用一下
require(['jquery', 'layui', 'ko'], function($, layui, ko) {
    var layer = layui.layer;
    var vmHeader = {
        logo: '我是LOGO标识占位符'
    };
    ko.applyBindings(vmHeader, document.getElementById('header'));
    //注意：导航 依赖 element 模块，否则无法进行功能性操作
    layui.use('element', function(){
        var element = layui.element;
    });
    // ko.unapplyBindings = function ($node, remove) { 
    //     // unbind events 
    //     $node.find("*").each(function(){ $(this).unbind(); }); 
    // }
})