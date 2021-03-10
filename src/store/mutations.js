/*
直接更新state的多个方法的对象
 */
import {
  RECEIVE_TOKEN,
  RECEIVE_USERNAME,
  RECEIVE_USERID,
} from './mutation-types'

export default {
  [RECEIVE_TOKEN] (state, {token}) {
    state.token = token
  },
  [RECEIVE_USERNAME] (state, {username}) {
    state.username = username
  },
  [RECEIVE_USERID] (state, {userid}) {
    state.userid = userid
  },
}

