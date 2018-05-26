define(function () {
    var MOCK = false;
    var MOCKPATH = 'http://192.168.57.105:8080/mockjsdata/63';
    var APIPATH = window.location.protocol + '//' + window.location.host;
    var PATH = MOCK ? MOCKPATH : APIPATH;
    var API = {
       
    }

    return API;
})