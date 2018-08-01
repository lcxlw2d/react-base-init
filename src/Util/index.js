import {Toast} from 'antd-mobile';
const Util = {
    isProdEnv: function () {
        return this.__chkEnv('production')
    },
    isTestEnv: function () {
        return this.__chkEnv('test');
    },
    isDevEnv: function () {
        return this.__chkEnv('develop');
    },
    __chkEnv: function (envName) {
        // let env = process.env['NODE_ENV'] || '';
        let env = this.getENV();
        // let env = 'develop';// TODO
        if (env === envName) return true;
        return false;
    },
    //获取环境变量
    getENV() {
        return (process.env['NODE_ENV'] || '').trim();
    },
    trim: function(str){
        return str.replace(/\s/ig,'');
    },
    isIdNum(card){ 
        // 身份证号码为15位或者18位，15位时全为数字，18位前17位为数字，最后一位是校验位，可能为数字或字符X 
        var reg = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/; 
        if(reg.test(card) === false){
            return false; 
        }
        return true;
    },
    isSql(text){
        let re= /select|update|delete|exec|count|'|"|=|;|>|<|%/i;
        if ( re.test(text) ){
            return true;
        }else{
            return false;
        }
    },
    isPhoneNum(phone){
        let re = /^(1)\d{10}$/;
        if(re.test(phone)){
            return true;
        }else{
            return false;
        }
    },
    //设置标题
    setTitle(title){
        document.querySelector('title').innerText = title;
    },
    // 获取URL参数
    // parseQuery(url) {
    //     var queryObj={};
    //     var reg=/[?&]([^=&#]+)=([^&#]*)/g;
    //     var querys=url.match(reg);
    //     if(querys){
    //         for(var i in querys){
    //             var query=querys[i].split('=');
    //             var key=query[0].substr(1),
    //                 value=query[1];
    //             queryObj[key]?queryObj[key]=[].concat(queryObj[key],value):queryObj[key]=value;
    //         }
    //     }
    //     return queryObj;
    // },
    parseQuery(url) {
        var queryObj={};
        var reg=/[?&]([^=&#]+)=([^&#]*)/g;
        var querys=url.match(reg);
        if(querys){
            for(var i in querys){
                var query=querys[i].split('=');
                var key=query[0].substr(1),
                value=query[1];
                if(query.length>2){
                    query.shift();
                    value = query.join('=');
                }
                
                
                queryObj[key]?queryObj[key]=[].concat(queryObj[key],value):queryObj[key]=value;
            }
        }
        return queryObj;
    },
    // 清除已存在的localStorage某个字段
    removeLocalStorageKeys(keysArr){
        keysArr.forEach((item,index)=>{
            if(window.localStorage.getItem(item)){
                window.localStorage.removeItem(item);
            }
        })
        
    },
    isWeixin() {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.match(/MicroMessenger/i) == "micromessenger") {
            return true;
        } else {
            return false;
        }
    },
    // 跳转到活动页面
    toEntryPage(url){
        Toast.loading('即将返回活动页面');
        setTimeout(function(){
            window.location.href = url;
        },3000)
    },
    // 是否从活动页进入
    isFromActivity(){
        let openid = window.localStorage.getItem('openid');
        let url = window.localStorage.getItem('url');
        let bindFundAccount = window.localStorage.getItem('bindFundAccount');
        if(openid!='undefined'&&url!='undefined'&&bindFundAccount!='undefined'){
            return true;
        }else{
            return false;
        }
    }
}

export default Util;