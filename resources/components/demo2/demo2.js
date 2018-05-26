/*
    author：junyang9
    time：2018/5/20
*/
require.config(requireConfig); // require配置对象写在了require.js库文件的最后，在这里也需要用config配置方法引用一下
require(['jquery', 'layui', 'ko'], function($, layui, ko) {
    var layer = layui.layer;
    var main = document.getElementById('main');
    // 加载页面时先清除ko的上次绑定(若不清除会报multiple time same element--多次绑定同一个元素的错)，再绑定本次ko绑定
    ko.cleanNode(main);
    function User() {
        this.user = {
            name: 'Lucy',
            age: 25,
            do: 'Lucy do something' // 注意：do是关键字不能单独放到外面定义和引用，否则报错
        }
        this.dothis = 'Lucy do something'
    }
    ko.applyBindings(new User(), main);
})