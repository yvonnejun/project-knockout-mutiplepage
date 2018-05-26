function Utils() { }
Utils.prototype = {
    constructor: Utils,
    isPhoneValid: function (phone) { //匹配手机号码
        var myreg = /^(((13[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if (myreg.test(phone)) {
            return true;
        } else {
            return false;
        }
    },
    isTelephoneValid: function (str) { //匹配电话号码
        var re = /^0\d{2,3}-?\d{7,8}$/;
        if (re.test(str)) {
            return true;
        } else {
            return false;
        }
    },
    isMailValid: function (mail) { //匹配电子邮件格式
        //对电子邮件的验证
        var myreg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
        if (myreg.test(mail)) {
            return true;
        }
        return false;
    },
    isIdCard: function (card) { //匹配身份证号
        // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (reg.test(card)) {
            return true;
        } else {
            return false;
        }
    },

    isSoldierCard: function (card) { 
        var reg = /南字第(\d{8})号|北字第(\d{8})号|沈字第(\d{8})号|兰字第(\d{8})号|成字第(\d{8})号|济字第(\d{8})号|广字第(\d{8})号|海字第(\d{8})号|空字第(\d{8})号|参字第(\d{8})号|政字第(\d{8})号|后字第(\d{8})号|装字第(\d{8})号/;
        if (reg.test(card)) {
            return true;
        } else {
            return false;
        }
    },

    /**
     * str 2017-09-09
     * @param {Object} str
     */
    getWeek: function (str) { //得到星期时间
        var array = str.split("-");
        var date = new Date(array[0], array[1] - 1, array[2]);
        var week = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
        return week[date.getDay()];
    },

    /**
     * 获取当前日期年月日
     * @param  {string}  param  '/' || '-'
     * @return {string}
     */
    getNowFormatDate: function (param) { 
        var date = new Date();
        var seperator1 = param ? param : '-';
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return {
            year : year,
            month : month,
            strDate : strDate,
            currentdate : currentdate
        }
    },
     /**
     * 获取当前时间time
     * @param  {string}  param  '/' || '-' || ':'
     * @return {string}
     */
    getNowFormatTime: function (param) { 
        var date = new Date();
        var seperator1 = param ? param : ':';
        var hours = date.getHours();
        var minutes = date.getMinutes();
        var seconds = date.getSeconds();
        if (hours >= 1 && hours <= 9) {
            hours = "0" + hours;
        }
        if (minutes >= 1 && minutes <= 9) {
            minutes = "0" + minutes;
        }
        if (seconds >= 0 && seconds <= 9) {
            seconds = "0" + seconds;
        }
        var currenttime = hours + seperator1 + minutes + seperator1 + seconds;
        return {
            hours : hours,
            minutes : minutes,
            seconds : seconds,
            currenttime : currenttime
        }
    },

    getDateAddDayCount: function (AddDayCount) { 
        var date = new Date();
        date.setDate(date.getDate() + AddDayCount); 

        var seperator1 = "-";
        var year = date.getFullYear();
        var month = date.getMonth() + 1;
        var strDate = date.getDate();
        if (month >= 1 && month <= 9) {
            month = "0" + month;
        }
        if (strDate >= 0 && strDate <= 9) {
            strDate = "0" + strDate;
        }
        var currentdate = year + seperator1 + month + seperator1 + strDate;
        return currentdate;
    },

    /**
     * 获取当前时间
     * @param  {format}  param  yyyyMMddHHmmss  
     */
    formatDate: function (format) {
        var date = new Date();
        var o = {
            "M+": date.getMonth() + 1, 
            "d+": date.getDate(), 
            "H+": date.getHours(), 
            "m+": date.getMinutes(), 
            "s+": date.getSeconds(), 
            "q+": Math.floor((date.getMonth() + 3) / 3), 
            "S": date.getMilliseconds() 
        }
        if (/(y+)/.test(format)) {
            format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
        }

        for (var k in o) {
            if (new RegExp("(" + k + ")").test(format)) {
                format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
            }
        }
        return format;
    },
    /**
     * 转换时间
     */
    calcdate: function (time) { //获取现在当前时间，转换成年月日2
        var sDate, 
            oDate1, 
            oDate2, 
            nDate,
            days, 
            result; 
        var timeStart = time.substring(
            0, 4) + "-" + time.substring(
                4, 6) + "-" + time.substring(6, 8);

        var timeNow = new Date(); 
        timeNow = llqUtils.timeForData(timeNow);

        sDate = timeStart.split("-");
        oDate1 = new Date(sDate[1] + '-' + sDate[2] + '-' + sDate[0]);
        nDate = timeNow.split("-");
        oDate2 = new Date(nDate[1] + '-' + nDate[2] + '-' + nDate[0]);

        days = parseInt(Math.abs(oDate2 - oDate1) / 1000 / 60 / 60 / 24);

        switch (days) {
            case 0:
                result = time.substring(8, 10) + ":" + time.substring(
                    10, 12);
                break;
            case 1:
                result = "昨天" + time.substring(8, 10) + ":" + time.substring(
                    10, 12);
                break;
            default:
                result = sDate[0] + '年' + sDate[1] + '月' + sDate[2] + '日 ' + time.substring(8, 10) + ":" + time.substring(
                    10, 12);
                break;
        };
        return result;
    },
    timeForData: function (time) {
        var year = time.getFullYear().toString();
        var month = (time.getMonth() + 1).toString();
        if (month.length == 1) {
            month = "0" + (time.getMonth() + 1).toString();
        }
        var day = time.getDate().toString();
        if (day.length == 1) {
            day = "0" + time.getDate().toString();
        }
        return year + "-" + month + "-" + day;
    },

    sendInfoToNative: function (action, jsonObjet) {
        croods.customPlugin({
            action: 'GotoLoginPlugin.gotoLogin',
            //必填,PluginName为插件名、ActionName为插件内方法
            params: {},
            //可选,插件需请求参数
            success: function (res) { 
                localStorage.userInfo = JSON.stringify(res);
                var userInfo = JSON.parse(localStorage.userInfo);
                localStorage.userId = userInfo.userId;
                // localStorage.communityId = userInfo.communityCode;
            }
        });
    },

    playAudio: function (url) { 
        url = url || 'http://www.gongqinglin.com/accessory/ding.wav';
        var borswer = window.navigator.userAgent.toLowerCase();
        var strAudio = "<audio class='hidden-audio' src='" + wavUrl + "' hidden='true'>";
        if (!document.querySelector(".hidden-audio")) {
            var element = document.createElement('div');
            element.innerHTML = strAudio;
            document.body.appendChild(element);
        }
        var audio = document.querySelector(".hidden-audio");
        //浏览器支持 audion
        audio.play();
    },

    compareTime: function (startTime, endTime) { 
        var startT = startTime.split(":");
        var endT = endTime.split(":");
        var startH = Number(startT[0]);
        var startM = Number(startT[1]);
        var st = startH * 60 + startM;
        var endH = Number(endT[0]);
        var endM = Number(endT[1]);
        var et = endH * 60 + endM;
        var date = new Date();
        var hour = date.getHours();
        var min = date.getMinutes();
        var cur = hour * 60 + min;
        var flag = -1; //不显示
        if (cur - st >= -30 && cur - st < 0) {
            flag = 0; //首班
        } else if (cur - et < 0 && cur - et > -30) {
            flag = 1; //末班
        } else if (cur - st < -30 || cur - et > 0) {
            flag = 2; //停运
        }
        // console.log('time flag=' + flag + " startTime=" + startTime + " endTime=" + endTime +  " st=" + st + " et=" + et +　" cur=" + cur);
        return flag;
    },

    getQueryString: function (name) { //获取url？后面的参数值
        var hash = window.location.hash,
            search = hash.slice(hash.indexOf('?') + 1);
        var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
        var r = search.match(reg);
        if (r != null) {
            return (r[2]);
        }
        return '';
    },
    // 获取浏览器当前页面的可见内容高度
    getCurrentPageClientHeight: function () {
        // sessionStorage.bodyClientHeight = document.body.clientHeight;
    },
    highLight: function (idVal, keyword, color) { //高亮utils.highLight('.highlight', key, '#2797ff');
        //正则替换
        //g （全文查找出现的所有 pattern）
        //i （忽略大小写）
        var hlValue = new RegExp("(" + keyword + ")", "gi");
        var items = document.querySelectorAll(idVal);
        for (var i = 0; i < items.length; i++) {
            var element = items[i];
            element.innerHTML = (element.innerHTML).replace(hlValue, "<font color=" + color + ">$1</font>");
        }
    },
    insertRoutePlanHistory: function () { //插入路由浏览历史
        if (sessionStorage.startLocation && sessionStorage.endLocation) {
            var start = JSON.parse(sessionStorage.startLocation);
            var end = JSON.parse(sessionStorage.endLocation);
            var history = [];
            if (localStorage.lineHistory) {
                history = JSON.parse(localStorage.lineHistory);
            }
            //写入历史
            var item = {
                'start': start.name,
                'startLng': start.location.lng,
                'startLat': start.location.lat,
                'end': end.name,
                'endLng': end.location.lng,
                'endLat': end.location.lat
            };
            var insert = true;
            history.forEach(function (element) {
                if (element.start == start.name && element.end == end.name) {
                    insert = false;
                    console.log('--repeat--');
                    return;
                }
            }, this);
            if (insert) {
                if (history.length >= 20) {
                    //大于20条则先移除最后一条
                    history.pop();
                }
                console.log('--insert line to history--');
                history.unshift(item);
                localStorage.lineHistory = JSON.stringify(history);
            }
        }
    },
    //格式化音频时间 5'23''
    formartDuration: function (duration) {
        var time = Math.ceil(duration);
        var hour = parseInt(time / 60);
        var second = time % 60;
        if (second < 10) {
            second = '0' + second;
        }
        var str = hour + "'" + second + "''";
        return str;
    },
    packData: function (params, requestCode, type, isAuth, jumpUrl, pageType, isDiag, requestVer, requestMsg) {
        var request = {};
        request.params = params || {};
        request.requestCode = requestCode || '';
        request.type = type || 0;
        request.isAuth = isAuth || false;
        request.jumpUrl = jumpUrl || '';
        request.pageType = pageType || '';
        request.isDiag = isDiag || 'false';
        request.requestVer = requestVer || '';
        request.requestMsg = requestMsg || '';
        return request;
    },
    judgeMobileType: function () { //判断手机终端设备ios还是android
        var u = navigator.userAgent;
        var isAndroid = u.indexOf('Android') > -1 || u.indexOf('Adr') > -1; //android终端
        var isiOS = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        var mobileType = '';
        if (isAndroid) {
            mobileType = 'Android';
            IS_IOS = false;
        } else if (isiOS) {
            mobileType = 'IOS';
            IS_IOS = true;
        }
        window.MOBILE_TYPE = mobileType
    },

    highLight: function (idVal, keyword, color) { //高亮
        //正则替换
        //g （全文查找出现的所有 pattern）
        //i （忽略大小写）
        var hlValue = new RegExp("(" + keyword + ")", "gi");
        var items = document.querySelectorAll(idVal);
        for (var i = 0; i < items.length; i++) {
            var element = items[i];
            element.innerHTML = (element.innerHTML).replace(hlValue, "<font color=" + color + ">$1</font>");
        }
    },

    keepTwoDecimals: function (value) { //四舍五入保留两位小数
        var value = Math.round(parseFloat(value) * 100) / 100;
        var xsd = value.toString().split(".");
        if (xsd.length == 1) {
            value = value.toString() + ".00";
            return value;
        }
        if (xsd.length > 1) {
            if (xsd[1].length < 2) {
                value = value.toString() + "0";
            }
            return value;
        }
    },

    scrollWhenTooLong: function () {
        var scrollObj = document.getElementById('scrollobj');
        //id 设置为 scrollobj 样式设置为:
        // #scrollobj {
        //     min - width: 70 px;
        //     /*先在这里写个最小宽度*/
        //     display: inline - block;
        //     white - space: nowrap;
        //     overflow: hidden;
        // }

        function scroll(self) {
            /*往左*/
            var tmp = (self.scrollLeft)++;
            //当滚动条到达右边顶端时 
            if (self.scrollLeft == tmp) {
                self.innerHTML += "&nbsp;&nbsp;&nbsp;&nbsp;" + self.innerHTML;
            }
            //当滚动条滚动了初始内容的宽度时滚动条回到最左端 
            if (self.scrollLeft >= self.firstChild.offsetWidth) {
                self.scrollLeft = 0;
            }
        }

        if (scrollObj.scrollWidth > scrollObj.offsetWidth) { // 判断是否需要滚动
            var timer = setInterval(function () {
                scroll(scrollObj);
            }, 30);
        }
    },
    kilobit: function (v) { //大数据，中间加逗号效果的包装方法
        return v.toString().replace(/\d+/, function (n) {
            return n.replace(/(\d)(?=(\d{3})+$)/g, function ($1) {
                return $1 + ",";
            });
        });
    },
    unkilobit: function (str) { 
        str = str.replace(/,/g, "");//取消字符串中出现的所有逗号 
        return str; 
    },
    addCssByLink: function(url){  
        var doc=document;  
        var link=doc.createElement("link");  
        link.setAttribute("rel", "stylesheet");  
        link.setAttribute("type", "text/css");  
        link.setAttribute("href", url);  
      
        var heads = doc.getElementsByTagName("head");  
        if(heads.length)  
            heads[0].appendChild(link);  
        else  
            doc.documentElement.appendChild(link);  
    },
    //移除ko绑定
    removeBingding: function () {
        var main = document.getElementById('main');
        main.setAttribute("data-bind", "");
        ko.cleanNode(main);
        ko.applyBindings(myModel, main);
    },
    // 动态加载html页面和css样式
    loadPage: function(moduleName) {
        // $('#main').html('');
        // $('#main').html(moduleName); // html则就非要加载转换成模块的html代码了
        // load方法可以直接加载.html方法
        $('#main').load('/resources/components/' + moduleName + '/' + moduleName + '.html');
        this.addCssByLink('/resources/css/' + moduleName + '.css');
    }
}
window.utils = new Utils();
utils.getCurrentPageClientHeight();
utils.judgeMobileType();