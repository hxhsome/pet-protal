<template>
  <div>
    <div v-if="dataForm.length === 0">
    <el-table
      v-loading="loading"
      :data="tableData"
      style="width: 100%;height: 500px;">
    </el-table>
    </div>
    <el-collapse accordion v-else style="width: 100%;height: 500px;">
      <el-collapse-item v-for="(item,index) in dataForm" :key="index">
        <template slot="title">
          宠物名称：{{ item.petName }}<i class="header-icon el-icon-info"></i>
        </template>
        <div>订单编号：{{ item.id }}</div>
        <div>宠物详情：{{ item.detail }}</div>
        <div>宠物图片：<img style="width: 252px; height: 274px" :src="item.photo" alt=""></div>
        <br>
        <div>宠物状态：{{ item.status }}</div>
      </el-collapse-item>
    </el-collapse>
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
import {reqPetCartByUserid, reqPetStatusOne} from '../../api'

export default {
  data () {
    return {
      page: 1,
      limit: 4,
      total: 0,
      dataForm: []
    }
  },
  mounted () {
    let promise = reqPetCartByUserid(localStorage.getItem('userid'), this.limit, this.page)
    promise.then(data => {
      this.total = data.page.totalCount
      this.page = data.page.currPage
      this.dataForm = data.page.list
      this.dataForm.forEach(form => {
        if (form.status === 0) {
          form.status = '寻求救助审核中'
        } else if (form.status === 1) {
          form.status = '后台审核成功'
        } else if (form.status === 2) {
          form.status = '领养救助成功'
        }
      })
      console.log(data)
    })
  },
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      let promise = reqPetCartByUserid(localStorage.getItem('userid'), this.limit, val)
      promise.then(data => {
        this.total = data.page.totalCount
        this.page = data.page.currPage
        this.dataForm = data.page.list
        this.dataForm.forEach(form => {
          if (form.status === 0) {
            form.status = '寻求救助审核中'
          } else if (form.status === 1) {
            form.status = '后台审核成功'
          } else if (form.status === 2) {
            form.status = '领养救助成功'
          }
        })
        console.log(data)
      })
    }
  }
}
</script>

<style>
.block {
  margin-top: 10px;
  margin-right: 5px;
}
</style>
