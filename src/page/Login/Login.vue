<template>
  <div>
    <div class="container1">

      <form class="form-horizontal">
        <div class="form-group">
          <label class="col-sm-2 control-label inline-style font-position-right">用户名</label>
          <div class="col-sm-9 inline-style ">
            <input type="text" class="form-control" v-model="username" placeholder="用户名">
          </div>
        </div>
        <div class="form-group">
          <label class="col-sm-2 control-label  inline-style font-position-right">密码</label>
          <div class="col-sm-9  inline-style">
            <input type="password" class="form-control" v-model="password" placeholder="密码">
          </div>
        </div>

        <div class="form-group">
          <label class="col-sm-2 control-label  inline-style font-position-right">验证码</label>
          <div class="col-sm-6  inline-style">
            <input type="password" class="form-control" v-model="captcha" placeholder="验证码">
          </div>
          <div class="col-sm-3  inline-style">
            <img :src="captchaPath" @click="getCaptcha()" alt="验证码">
          </div>
        </div>
        <div class="form-group col-sm-offset-5">
          <router-link to="/register">还没有账号，去注册</router-link>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-lg btn-primary btn-block register-btn" @click.prevent="login">登录</button>
          </div>
        </div>
      </form>
    </div>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import {getUUID} from '@/utils'
import {reqLogin, reqUserInfo} from '../../api'

// const BASE_URL = 'http://localhost:8888'
let BASE_URL = '/api'

export default {
  data () {
    return {
      captchaPath: '',
      username: 'zhangsan',
      password: '123456',
      captcha: '',
      uuid: ''
    }
  },
  created () {
    this.getCaptcha()
  },
  methods: {
    getCaptcha () {
      // 1.获取验证码
      const uuid = getUUID()
      this.captchaPath = `${BASE_URL}/pet/captcha.jpg?uuid=${uuid}&`
      this.uuid = uuid
      // console.log(this.captchaPath)
    },
    login () {
      const username = this.username
      const password = this.password
      if (!username) {
        this.$message.warning('请输入用户名')
      } else if (!password) {
        this.$message.warning('请输入密码')
      } else {
        let promise = reqLogin(this.uuid, this.username, this.password, this.captcha)
        promise.then(data => {
          // 登陆成功
          if (data.msg === 'success') {
            this.$message({
              message: '登录成功',
              type: 'success'
            })
            // 获取用户token信息并保存
            let getTokenResult = reqUserInfo(username)
            getTokenResult.then(data => {
              // 用户已经登录，将token取出存放在vuex中
              if (data.token) {
                localStorage.setItem('token', data.token)
                localStorage.setItem('username', username)
                localStorage.setItem('userid', data.userid)
                this.$store.dispatch('recordUser', data.token)
                this.$store.dispatch('recordUsername', username)
                this.$store.dispatch('recordUserid', data.userid)
                // console.log(this.$store.state.token)
                // 跳转到主页
                this.$router.back()
              }
            })
          } else {
            // 登录失败
            this.$message.error(data.msg)
            this.getCaptcha()
          }
        }
        )
      }
    }
  }
}
</script>
<style>
.container1 {
  margin-top: 70px;
  width: 45%;
  margin-left: 30%;
}

/* 需要在一行的元素 */
.inline-style {
  display: inline-block;
}

/* 文字需要靠右 */
.font-position-right {
  text-align: right;
}

/* 注册按钮 */
.register-btn {
  margin-left: 0%;
  /*margin-right: 10%;*/
}
</style>
