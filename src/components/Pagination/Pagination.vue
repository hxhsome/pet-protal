<template>
  <div class="block">
<!--    <span class="demonstration">直接前往</span>-->
    <el-pagination
      background
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page.sync="currentPage3"
      :page-size="100"
      layout="total, prev, pager, next, jumper"
      :total="1000">
    </el-pagination>
  </div>
</template>
<script>
export default {
  methods: {
    handleSizeChange (val) {
      console.log(`每页 ${val} 条`)
    },
    handleCurrentChange (val) {
      console.log(`当前页: ${val}`)
    }
  },
  data () {
    return {
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4
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
