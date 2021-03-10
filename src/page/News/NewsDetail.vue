<template>
  <div>
    <div>
      <div>
        <img :src="data.coverURL" style="width: 252px;height: 274px" alt="">
      </div>
      <div class="container1">
        <div>宠物名称：<span>{{ data.name }}</span></div>
        <br>
        <div>宠物分类：<span>{{data.pettype}}</span></div>
        <br>
        <div>宠物英文名：{{ data.engName }}</div>
        <br>
        <div>宠物性格：{{ data.characters }}</div>
        <br>
        <div>宠物祖籍：{{ data.nation }}</div>
        <br>
        <div>宠物易患病：{{ data.easyOfDisease }}</div>
        <br>
        <div>宠物寿命：{{ data.life }}</div>
        <br>
        <div>宠物价格：{{ data.price }}</div>
        <br>
        <div>宠物描述：<span>{{ data.desc }}</span></div>
        <br>
      </div>
    </div>
    <el-tooltip class="block" content="Top center" placement="top">
      <el-button @click="$router.back()">返回</el-button>
    </el-tooltip>
  </div>
</template>

<script>
export default {
  name: 'NewsDetail',
  data () {
    return {
      data: this.$route.query.data
    }
  },
  mounted () {
    if (this.data.pettype === 1) {
      this.data.pettype = '犬类'
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

.container1 {
  margin-top: 2px;
  width: 45%;
  margin-left: 35%;
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
