/*
    author：junyang9
    time：2018/5/20
*/
require.config(requireConfig); // require配置对象写在了require.js库文件的最后，在这里也需要用config配置方法引用一下
require([
    'jquery', 
    'layui', 
    'ko'], function($, layui, ko) {
    var layer = layui.layer;
    var vmslider = {
        sliderBar: '我是侧边栏',
        sliderLeftClick: function(e) {
            console.log($(e.target))
        }
    }
    // var elem = document.getElementById('slider-left');
    // ko.cleanNode(elem);
    // ko.applyBindings(vmslider, elem);
    ko.applyBindings(vmslider, document.getElementById('slider-left'));
    //注意：导航 依赖 element 模块，否则无法进行功能性操作
    layui.use('element', function(){
        var element = layui.element;
    });
})