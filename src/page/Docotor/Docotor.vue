<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-3" v-for="(items,index) in dataForm" :key="index">
        <div class="thumbnail">
          <img style="width: 252px; height: 274px"
            :src="items.photo"
            alt="">
          <div class="caption">
            <h3>{{ items.name }}</h3>
            <p>联系方式：{{ items.phone }}</p>
            <p>
              <button class="btn btn-primary" role="button">详情</button>
              <button href="#" class="btn btn-default" role="button">留言</button>
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
import {reqDocotor} from '../../api'

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
  mounted () {
    let promise = reqDocotor(1, 8)
    promise.then(data => {
      this.total = data.page.totalCount
      this.dataForm = data.page.list
    })
  },
  components: {},
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      let promise = reqDocotor(val, 8)
      promise.then(data => {
        this.total = data.page.totalCount
        this.dataForm = data.page.list
      })
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
