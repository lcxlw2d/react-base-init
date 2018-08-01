import $ from 'webpack-zepto'

const request = (url,params,method='POST') => {
    let promise = new Promise(function (resolve, reject) {
        $.ajax({
            url: url,
            type: method,
            data: params,
            dataType: 'json',
            timeout: 10000,
            cache: false,
            success: function (resp) {
                let res = resp;
                resolve(res)
            },
            error: function (err) {
                console.log(err)
                reject(err)
            }
        })
    })
    return promise

}

export default request;