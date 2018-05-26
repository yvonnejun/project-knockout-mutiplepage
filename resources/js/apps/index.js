/*
    author：junyang9
    time：2018/5/20
*/
require.config(requireConfig); // require配置对象写在了require.js库文件的最后，在这里也需要用config配置方法引用一下
require([
    'jquery', 
    'layui', 
    'ko', 
    'utils', 
    'text!../../components/header/header.html',
    'text!../../components/slider-left/slider-left.html'
    // 'text!../../components/demo1/demo1.html',
    // 'text!../../components/demo2/demo2.html'  // 注：这样的模块加载是有效的
], function(
        $, 
        layui, 
        ko, 
        utils, 
        header, 
        sliderLeft
        // demo1,  // 上面的模板变成模块后，也要在参数里面引用进来才行
        // demo2
    ) {
    var layer = layui.layer;
    var vm = {
        projectName: 'knockout项目'
    };
    // layer.msg('hello');
    ko.applyBindings(vm);
    // $('#target').html(require("text!目标按钮对应的页面.html"));
    // 加载顶部导航栏
    $('#header').html(header); // 上面的require列表中先依赖，这里再加载这个模块
    //$('#header').html(require('text!../../components/header/header.html')); // 或者这里灵活依赖和加载
    utils.addCssByLink('/resources/css/header.css'); 
    // 加载左侧左边栏
    // $('#slider-left').html(sliderLeft);
    $('#slider-left').html(require('text!../../components/slider-left/slider-left.html'));
    utils.addCssByLink('/resources/css/slider-left.css'); 
    // 加载主区域内容
    init();
    function init() {
        utils.loadPage('demo2');
    }

    $('.layui-nav-item').find('a').click(function () {
        //console.log($(this).data('url'));
        var path = $(this).data('url');
        //console.log(require('text!../../components/'+path+'/'+path+'.html'));
        // var module = require('text!../../components/'+path+'/'+path+'.html'); // 实测这样写也是有效的
        // console.log(require('text!../../components/demo2/demo2.html'));
        utils.loadPage(path);
    });

    
})


 