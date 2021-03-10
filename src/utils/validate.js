// 校验是否全由数字组成
export function isDigit (s) {
  var patrn = /^[0-9]{1,20}$/
  if (!patrn.exec(s)) return false
  return true
}

// 校验登录名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
export function isRegisterUserName (s) {
  var patrn = /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/
  if (!patrn.exec(s)) return false
  return true
}

// 校验用户姓名：只能输入1-30个以字母开头的字串
export function isTrueName (s) {
  var patrn = /^[a-zA-Z]{1,30}$/
  if (!patrn.exec(s)) return false
  return true
}

// 校验密码：只能输入6-20个字母、数字、下划线
export function isPasswd (s) {
  var patrn = /^(\w){6,20}$/
  if (!patrn.exec(s)) return false
  return true
}

// 校验普通电话、传真号码：可以“+”开头，除数字外，可含有“-”
export function isTel (s) {
  // var   patrn=/^[+]{0,1}(\d){1,3}[   ]?([-]?(\d){1,12})+$/;
  var patrn = /^[+]{0,1}(\d){1,3}[ {3}]?([-]?((\d)|[ {3}]){1,12})+$/
  if (!patrn.exec(s)) return false
  return true
}

// 校验手机号码：必须以数字开头，除数字外，可含有“-”
export function isMobil (s) {
  var patrn = /^[+]{0,1}(\d){1,3}[ {3}]?([-]?((\d)|[ {3}]){1,12})+$/
  if (!patrn.exec(s)) return false
  return true
}

// 校验邮政编码
export function isPostalCode (s) {
  // var   patrn=/^[a-zA-Z0-9]{3,12}$/;
  var patrn = /^[a-zA-Z0-9 {3}]{3,12}$/
  if (!patrn.exec(s)) return false
  return true
}

// 校验搜索关键字
export function isSearch (s) {
  // eslint-disable-next-line no-useless-escape
  var patrn = /^[^`~!@#$%^&*()+=|\\\][\]\{\}:;\ '\,. <> /?]{1}[^`~!@$%^&()+=|\\\][\]\{\}:;\ '\,. <> ?]{0,19}$/
  if (!patrn.exec(s)) return false
  return true
}

export function isIP (s) {
  var patrn = /^[0-9.]{1,20}$/
  if (!patrn.exec(s)) return false
  return true
}

/**
 * 邮箱
 * @param {*} s
 */
export function isEmail (s) {
  return /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((.[a-zA-Z0-9_-]{2,3}){1,2})$/.test(s)
}

/**
 * 手机号码
 * @param {*} s
 */
export function isMobile (s) {
  return /^1[0-9]{10}$/.test(s)
}

/**
 * 电话号码
 * @param {*} s
 */
export function isPhone (s) {
  return /^([0-9]{3,4}-)?[0-9]{7,8}$/.test(s)
}

/**
 * URL地址
 * @param {*} s
 */
export function isURL (s) {
  return /^http[s]?:\/\/.*/.test(s)
}
