<template>
  <div>
    <div class="container1">

      <form class="form-horizontal">
        <div class="form-group">
          <!--<h2 class="form-signin-heading">注册</h2>-->
          <!-- class="sr-only"将label标签隐藏 -->
          <label for="exampleInputUsername1" class="col-sm-2 control-label inline-style font-position-right">用户名</label>
          <div class="col-sm-9 inline-style ">
            <input @blur="checkUsername" v-model="username" type="text" class="form-control"
                   id="exampleInputUsername1"
                   placeholder="请输入5-20个以字母开头的用户名、可带数字、“_”、“.”的">
          </div>
        </div>
        <div class="form-group">
          <!--<h2 class="form-signin-heading">注册</h2>-->
          <label for="exampleInputUsername1" class="col-sm-2 control-label  inline-style font-position-right">密码</label>
          <div class="col-sm-9  inline-style">
            <input v-model="password" type="password" class="form-control" id="exampleInputPassword1"
                   placeholder="请输入6-20个字母、数字、下划线的密码">
          </div>
        </div>

        <div class="form-group">
          <!--<h2 class="form-signin-heading">注册</h2>-->
          <label for="exampleInputUsername1"
                 class="col-sm-2 control-label  inline-style font-position-right">确认密码</label>
          <div class="col-sm-9  inline-style">
            <input v-model="passwordOk" type="password" class="form-control" id="exampleInputPassword2"
                   placeholder="确认密码">
          </div>
        </div>

        <div class="form-group">
          <label for="exampleInputUsername1" class="col-sm-2 control-label  inline-style font-position-right">邮箱</label>
          <div class="col-sm-9  inline-style">
            <input v-model="email" type="email" class="form-control" id="exampleInputEmail1" placeholder="请输入正确的邮箱地址">
          </div>
          <div class="form-group">
          </div>
        </div>
        <div class="form-group">
          <label for="exampleInputUsername1"
                 class="col-sm-2 control-label   inline-style font-position-right">手机</label>
          <div class="col-sm-9  inline-style">
            <input v-model="phone" type="tel" class="form-control" id="exampleInputPhone1" placeholder="请输入正确的手机号码">
          </div>
        </div>
        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <div class="checkbox">
              <label>
                <!--<input type="checkbox">
                记住密码-->
              </label>
            </div>
          </div>
        </div>

        <div class="form-group">
          <div class="col-sm-offset-2 col-sm-10">
            <button class="btn btn-lg btn-primary btn-block register-btn" type="submit" @click.prevent="register()">注册
            </button>
          </div>
        </div>
      </form>
    </div>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import {reqRegister, reqUserByUsername} from '../../api'
import {isRegisterUserName, isMobil, isEmail, isPasswd} from '../../utils/validate'

export default {
  data () {
    return {
      username: '',
      password: '',
      passwordOk: '',
      email: '',
      phone: '',
      flag: true // 设置是否可以提交，用户名存在时候不向后端请求
    }
  },
  components: {},
  methods: {
    // 检查用户名是否存在
    checkUsername () {
      if (this.username) {
        let existUsername = reqUserByUsername(this.username)
        existUsername.then(data => {
          // 如果用户名存在
          if (data.code === 500) {
            this.$message.error(data.msg)
            this.flag = false
          } else {
            this.flag = true
          }
        })
      }
    },
    // 注册
    register () {
      this.checkUsername()
      const username = this.username
      const password = this.password
      const passwordOk = this.passwordOk
      const email = this.email
      const phone = this.phone
      if (!isRegisterUserName(username)) {
        this.$message.warning('用户名不合法')
      } else if (!isPasswd(password)) {
        this.$message.warning('密码不合法')
      } else if (!isEmail(email)) {
        this.$message.warning('邮箱不合法')
      } else if (!isMobil(phone)) {
        this.$message.warning('手机号不合法')
      } else if (!(passwordOk === password)) {
        this.$message.warning('两次输入的密码不同')
      } else {
        // 如果用户名
        if (this.flag) {
          let promise = reqRegister(this.username, this.password, this.email, this.phone)
          promise.then(data => {
            if (data.msg === 'success') {
              this.$message({
                message: '恭喜你，注册成功',
                type: 'success'
              })
              this.$router.push('/login')
            } else {
              this.$message.error(data.msg)
            }
          })
        }
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

