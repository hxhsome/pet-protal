<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-6 col-md-3" v-for="(items,index) in dataForm" :key="index">
        <div class="thumbnail">
          <img style="width: 252px; height: 274px"
               :src="items.coverURL"
               alt="">
          <div class="caption">
            <h3>{{ items.name }}</h3>
            <!--            <p></p>-->
            <p>
              <button @click="getPetDetail(index)" class="btn btn-primary" role="button">资讯详情</button>
              <!--              <button class="btn btn-default" role="button">Button</button>-->
            </p>
          </div>
        </div>
      </div>
    </div>
    <!--    <el-pagination class="block"-->
    <!--                   background-->
    <!--                   @size-change="handleSizeChange"-->
    <!--                   @current-change="handleCurrentChange"-->
    <!--                   :current-page.sync="page"-->
    <!--                   :page-size="limit"-->
    <!--                   layout="prev, pager, next"-->
    <!--                   :total="10000">-->
    <!--    </el-pagination>-->
    <div class="block">
      <el-tooltip content="Top center" placement="top">
        <el-button @click="handleCurrentChange(--page)" :disabled="page === 1">上一页</el-button>
      </el-tooltip>
      <el-tooltip content="Bottom center" placement="bottom" effect="light">
        <el-button @click="handleCurrentChange(++page)" :disabled="nextDisabled">下一页</el-button>
      </el-tooltip>
    </div>
  </div>
</template>


<script>

import {reqPet, reqPetNews} from '../../api'

export default {
  data () {
    return {
      // total: 0,
      limit: 8,
      page: 1,
      dataForm: [],
      nextDisabled: false
    }
  },
  mounted () {
    let promise = reqPetNews(1, 8)
    promise.then(data => {
      // this.total = data.page.totalCount
      this.dataForm = data.newslist
    })
  },
  components: {},
  methods: {
    // 获取宠物详情
    getPetDetail (index) {
      this.$router.push({path: '/newsDetail', query: {data: this.dataForm[index]}})
      console.log(this.dataForm[index])
    },
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
      let promise = reqPetNews(val, 8)
      promise.then(data => {
        if (data.code === 250) {
          this.page--
          this.nextDisabled = true
        } else {
          this.nextDisabled = false
          this.dataForm = data.newslist
        }
        // this.total = data.page.totalCount
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

.thumbnail {
  width: 262px;
  height: 420px;
}
</style>
