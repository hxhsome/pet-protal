<template>
  <div id="app">
    <Header/>
    <hr>
    <div class="container">
      <router-view></router-view>
    </div>
    <!--    <change-password v-if="isShowChangePassword"/>-->
    <br>
    <br>
    <el-backtop :visibility-height="50"></el-backtop>
    <!--    <div class="container text-center center-block col-sm-offset-2">-->
    <Footer/>
    <!--    </div>-->
  </div>
</template>

<script>
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import {mapState} from 'vuex'
// import ChangePassword from './components/ChangePassword/ChangePassword'

export default {
  name: 'App',
  data () {
    return {
      isShowChangePassword: false
    }
  },
  components: {
    Header,
    Footer,
    // ChangePassword
  },
  computed: {
    ...mapState['token']
  }
}
</script>

<style>

</style>
