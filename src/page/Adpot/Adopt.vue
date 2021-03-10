<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-3" v-for="(items,index) in dataForm" :key="index">
        <div class="thumbnail">
          <img style="width: 252px; height: 274px"
               :src="items.petphoto"
               alt="">
          <div class="caption">
            <h3>{{ items.petname.slice(0, 10) }}</h3>
            <!--            <p>...</p>-->
            <p>
              <button @click="Adopt(items)" class="btn btn-primary" role="button">领养</button>
              <button href="#" class="btn btn-default" role="button">详情</button>
            </p>
          </div>
        </div>
      </div>
    </div>
    <el-pagination class="block"
                   background
                   @size-change="handleSizeChange"
                   @current-change="handleCurrentChange"
                   :current-page.sync="page"
                   :page-size="limit"
                   layout="total, prev, pager, next, jumper"
                   :total="total">
    </el-pagination>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import {reqPetStatusOne, reqAdoptPet} from '../../api'
// import Pagination from '../../components/Pagination/Pagination'

export default {
  name: 'Adopt',
  data () {
    return {
      total: 0,
      limit: 8,
      page: 1,
      dataForm: []
    }
  },
  components: {},
  mounted () {
    let promise = reqPetStatusOne(1, 8)
    promise.then(data => {
      this.total = data.page.totalCount
      this.page = data.page.currPage
      this.dataForm = data.page.list
      console.log(data)
    })
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      let promise = reqPetStatusOne(val, 8)
      promise.then(data => {
        this.total = data.page.totalCount
        this.page = data.page.currPage
        this.dataForm = data.page.list
        console.log(data)
      })
    },
    // 领养宠物
    Adopt (items) {
      // 没有登录调到登录页面
      if (!localStorage.getItem('token')) {
        this.$router.push('login')
        this.$message.warning('请您先登录')
      } else {
        // 修改宠物信息，设置为等待管理员审核

        // 将该条记录添加到管理审核表(petcart)中
        this.$confirm(`您将领养该宠物[${items.petname}], 是否继续?`, '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          let promise = reqAdoptPet(items.petid, localStorage.getItem('userid'), 1, 2, items.petname, '领养界面领养', items.petphoto)
          console.log(items.petname)
          promise.then(data => {
            if (data.msg === '领养成功') {
              this.$message({
                type: 'success',
                message: '领养成功!',
                duration: 1500,
                onClose: () => {
                  this.$router.go(0)
                }
              })
            }
          })
        }).catch(() => {
          this.$message({
            type: 'info',
            message: '已取消领养'
          })
        })
      }
    }
  }
}
</script>

<style>
.block {
  margin-top: 10px;
  margin-right: 5px;
  float: right;
}
</style>
