import { combineReducers } from 'redux'
import {actionType} from '../actions/index'

const formData = (state = {},action) => {
  switch (action.type) {
    // case actionType.SET_IDENTITY_TYPE:
    //   let {idType} = action.payload;
    //   return {
    //     ...state,
    //     idType
    //   }
    
    default:
      return state  
  }

}

// const base = (state = {showDownload: true}, action) => {
//   switch (action.type) {
//     case actionType.SHOW_DOWNLOAD:
//       return {
//         ...state,
//         showDownload: true
//       }
//     case actionType.HIDE_DOWNLOAD:
//       return {
//         ...state,
//         showDownload: false
//       }  
//     default:
//       return state  
//   }
// }

export default combineReducers({
  formData,
  base,
})
