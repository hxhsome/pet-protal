/*
包含n个接口请求函数的模块
返回值依旧是Promise
 */
import ajax from './ajax'
import {getUUID} from '@/utils'

// const BASE_URL = 'http://localhost:8888'
const BASE_URL = '/api'

// 1.获取验证码
const uuid = getUUID()
export const reqCaptcha = () => ajax(`${BASE_URL}/pet/captcha.jpg?uuid=${uuid}`)

// 2.登录
export const reqLogin = (uuid, username, password, captcha) => ajax(`${BASE_URL}/pet/pet/petuser/login`, {
  uuid,
  username,
  password,
  captcha
}, 'POST')

// 3.注册
export const reqRegister = (username, pasword, email, phone) => ajax(`${BASE_URL}/pet/pet/petuser/save`, {
  username,
  pasword,
  email,
  phone
}, 'POST')

// 4.获取用户信息
export const reqUserInfo = (username) => ajax(`${BASE_URL}/pet/pet/petuser/getToken?username=${username}`)

// 5.根据用户名查找用户
export const reqUserByUsername = (username) => ajax(`${BASE_URL}/pet/pet/petuser/isExistUsername?username=${username}`)

// 5.判断宠物名称是否被用
export const reqPetByPetName = (petName) => ajax(`${BASE_URL}/pet/pet/pet/checkPetName?petName=${petName}`)

// 6.退出登录
export const reqLogout = (username) => ajax(`${BASE_URL}/pet/pet/petuser/logout?username=${username}`)

// 7.更改密码
export const reqChangePassword = (username, password, newPassword) => ajax(`${BASE_URL}/pet/pet/petuser/password`, {
  username,
  password,
  newPassword
}, 'POST')

// 8.获取没有被领养的宠物
export const reqPetStatusOne = (page, limit) => ajax(`${BASE_URL}/pet/pet/pet/listStatusOne?page=${page}&limit=${limit}`)

// 8.分页获取宠物医生
export const reqDocotor = (page, limit) => ajax(`${BASE_URL}/pet/pet/docotor/list?page=${page}&limit=${limit}`)

// 8.获取所有宠物
export const reqPet = (page, limit) => ajax(`${BASE_URL}/pet/pet/pet/list?page=${page}&limit=${limit}`)
const key = 'c79d816a563a8efbf4ad0f4667ee6c41'
// 8.获取宠物资讯
export const reqPetNews = (page, limit) => ajax(`http://api.tianapi.com/txapi/pet/index?key=${key}&page=${page}&num=${limit}`)

// 9.领养宠物
export const reqAdoptPet = (petid, userid, petStatus, petCartStatus, petName, detail, photo) => ajax(`${BASE_URL}/pet/pet/adopt/adopt`, {
  petid,
  userid,
  petStatus,
  petCartStatus,
  petName,
  detail,
  photo
}, 'POST')

// 9.发起救助
export const reqPublishPet = (photo, userid, petName, detail, categoryid, petStatus, petCartStatus) => ajax(`${BASE_URL}/pet/pet/publish/publish`, {
  photo, userid, petName, detail, categoryid, petStatus, petCartStatus
}, 'POST')

// 10.根据用户id获取订单
export const reqPetCartByUserid = (userid, limit, page) => ajax(`${BASE_URL}/pet/pet/petcart/listByUserid?userid=${userid}&limit=${limit}&page=${page}`)

