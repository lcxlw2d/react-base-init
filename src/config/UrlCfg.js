const baseUrl = {
    // 线上环境：
    // dev: 'https://wechat.xyzq.cn',
    // prod: 'https://wechat.xyzq.cn',
    
    // 测试环境：
    dev: 'http://www.xyzqts.cn:8072',   
    prod: 'http://www.xyzqts.cn:8072' 
}

let currentUrl = '';
if(Util.isDevEnv() || Util.isTestEnv()){
    currentUrl = baseUrl.dev;
}else if(Util.isProdEnv()){
    currentUrl = baseUrl.prod;    
}

const api = currentUrl + '/wechat/mp/home/unifyAccount';

export default api;
export {currentUrl};