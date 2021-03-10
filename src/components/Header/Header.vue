<!--<template>
  <div>
    <el-menu
      :default-active="activeIndex2"
      class="el-menu-demo row"
      mode="horizontal"
      @select="handleSelect"
      background-color="#545c64"
      text-color="#fff"
      active-text-color="#ffd04b">
      <el-menu-item index="1" class="col-md-2">首页</el-menu-item>
      <el-menu-item index="2" class="col-md-2">宠物救助领养</el-menu-item>
      <el-menu-item index="3" class="col-md-2">爱心医生</el-menu-item>
      <el-menu-item index="4" class="col-md-2">宠物资讯</el-menu-item>
      <el-menu-item index="5" class="col-md-2">寻求救助</el-menu-item>
      <el-menu-item index="6" class="col-md-1">注册</el-menu-item>
      <el-menu-item index="7" class="col-md-1">登录</el-menu-item>
    </el-menu>
  </div>
</template>-->
<template>
  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <!-- Brand and toggle get grouped for better mobile display -->
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse"
                data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <a class="navbar-brand iconfont icon-yiyuan1" href="#">宠物救助领养系统</a>
      </div>

      <!-- Collect the nav links, forms, and other content for toggling -->
      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
        <ul class="nav navbar-nav">
          <li :class="{active: selectIndex===1}" @click="changeSelectIndex(1)">
            <router-link to="/adopt">宠物救助领养
              <span class="sr-only">(current)</span>
            </router-link>
          </li>
          <li :class="{active: selectIndex===2}" @click="changeSelectIndex(2)">
            <router-link to="/docotor">爱心医生</router-link>
          </li>
          <li :class="{active: selectIndex===3}" @click="changeSelectIndex(3)">
            <router-link to="/news">宠物资讯</router-link>
          </li>
          <li :class="{active: selectIndex===4}" @click="changeSelectIndex(4)">
            <router-link to="/publish">寻求救助</router-link>
          </li>
          <!--          <li class="dropdown">-->
          <!--            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"-->
          <!--               aria-expanded="false">Dropdown <span class="caret"></span></a>-->
          <!--            <ul class="dropdown-menu">-->
          <!--              <li><a href="#">Action</a></li>-->
          <!--              <li><a href="#">Another action</a></li>-->
          <!--              <li><a href="#">Something else here</a></li>-->
          <!--              <li role="separator" class="divider"></li>-->
          <!--              <li><a href="#">Separated link</a></li>-->
          <!--              <li role="separator" class="divider"></li>-->
          <!--              <li><a href="#">One more separated link</a></li>-->
          <!--            </ul>-->
          <!--          </li>-->
        </ul>
        <form class="navbar-form navbar-left">
          <div class="form-group">
            <input type="text" class="form-control" placeholder="请输入搜索内容">
          </div>
          <button type="submit" class="btn btn-default">搜索</button>
        </form>
        <ul class="nav navbar-nav navbar-right" v-if="!token">
          <li :class="{active: selectIndex===5}" @click="changeSelectIndex(5)">
            <router-link to="/register">注册</router-link>
          </li>
          <li :class="{active: selectIndex===6}" @click="changeSelectIndex(6)">
            <router-link to="/login">登录</router-link>
          </li>
          <!--          <li class="dropdown">-->
          <!--            <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"-->
          <!--               aria-expanded="false">Dropdown <span class="caret"></span></a>-->
          <!--            <ul class="dropdown-menu">-->
          <!--              <li><a href="#">Action</a></li>-->
          <!--              <li><a href="#">Another action</a></li>-->
          <!--              <li><a href="#">Something else here</a></li>-->
          <!--              <li role="separator" class="divider"></li>-->
          <!--              <li><a href="#">Separated link</a></li>-->
          <!--            </ul>-->
          <!--          </li>-->
        </ul>
        <ul class="nav navbar-nav navbar-right" v-else>
          <el-col :span=100>
            <el-dropdown>
      <span class="el-dropdown-link">
                <i style="margin-top: 15px" class="el-icon-user">{{ username }}</i>
        <!--        <i class="el-icon-arrow-down el-icon&#45;&#45;right"></i>-->
      </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item><router-link to="/profile">个人订单</router-link></el-dropdown-item>
                <el-dropdown-item @click.native="changePassword()">修改密码</el-dropdown-item>
                <el-dropdown-item @click.native="logout()">退出</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-col>
        </ul>
      </div><!-- /.navbar-collapse -->
    </div><!-- /.container-fluid -->
    <change-password v-if="isShowChangePassword" ref="changePassword" />
  </nav>
</template>


<script>
import {mapState} from 'vuex'
import {reqLogout} from '../../api'
import ChangePassword from '../ChangePassword/ChangePassword'

export default {
  data () {
    return {
      selectIndex: 1,
      isShowChangePassword: false
    }
  },
  components: {
    ChangePassword
  },
  methods: {
    // 修改密码
    changePassword () {
      this.isShowChangePassword = true
      this.$nextTick(() => {
        this.$refs.changePassword.init()
      })
    },
    changeSelectIndex (index) {
      this.selectIndex = index
    },
    // 退出登录
    logout () {
      this.$confirm('你点击了退出操作, 是否继续?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        let promise = reqLogout(this.username)
        promise.then(data => {
          if (data.code === 0) {
            this.$message({
              type: 'success',
              message: '退出成功'
            })
            localStorage.clear()
            this.$router.push('/Adopt')
            this.$router.go(0)
          } else {
            this.$message.error(data.msg)
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消退出'
        })
      })
    }
  },
  computed: {
    ...mapState(['token', 'username'])
  }
}
</script>


<style>
.iconfont {
  font-family: "iconfont" !important;
  font-size: 16px;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.el-dropdown-link {
  cursor: pointer;
  color: #e88550;
}

.el-icon-arrow-down {
  font-size: 12px;
}

.demonstration {
  display: block;
  color: #8492a6;
  font-size: 14px;
  margin-bottom: 20px;
}
</style>
