/*
通过mutations间接更新state的多个方法的对象
 */
import {
  RECEIVE_TOKEN, RECEIVE_USERID,
  RECEIVE_USERNAME
} from './mutation-types'

import state from './state'

export default {
  // 同步记录用户信息
  recordUser ({commit}, token) {
    localStorage.setItem('token', token)
    commit(RECEIVE_TOKEN, {token})
  },
  recordUsername ({commit}, username) {
    localStorage.setItem('username', username)
    commit(RECEIVE_USERNAME, {username})
  },
  recordUserid ({commit}, userid) {
    localStorage.setItem('userid', userid)
    commit(RECEIVE_USERID, {userid})
  },
}
