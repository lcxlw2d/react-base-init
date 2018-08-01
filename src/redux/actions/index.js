import _request from '../../Util/request'
// import {currentUrl} from '../../config/UrlCfg'
import { Modal,Toast } from 'antd-mobile';


export const actionType = {
    // QUERY_WX_SUBSCRIBE: 'QUERY_WX_SUBSCRIBE'
}

export const actionCreater = {        
    
    // isBindUnifyAccount : (openid,callback = function(){}) => {
    //     return (dispatch,getState) => {
    //         dispatch(actionCreater.showLoading());
    //         return _request(UrlCfg,{
    //             act: 'isBindUnifyAccount',
    //             openid
    //         }).then(res => {
    //             if(res.code ==0){
    //                 dispatch(actionCreater.setisBindUnifyAccount(res));
    //                 dispatch(actionCreater.setXuId(res));
    //                 window.localStorage.setItem('xuid',res.xuid);
    //                 callback(res);
    //             }else{
    //                 Toast.fail(res.message);
    //             }
                
    //         })
    //         // .then(dispatch(actionCreater.hideLoading))
    //         .catch(err => console.log(err))
    //     }
    // },

    
}


