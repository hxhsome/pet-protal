<template>
  <div>
    <el-form ref="form" :model="form" label-width="80px">
      <el-form-item label="宠物名称">
        <el-input @blur="checkPetName()" v-model="form.name"></el-input>
      </el-form-item>
      <el-form-item label="申请类型">
        <el-select v-model="form.type" placeholder="请选择申请类型">
          <el-option label="救助" value="0"></el-option>
          <el-option label="寄养" value="2"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="宠物图片">
        <SingleUpload v-model="form.petphoto"/>
      </el-form-item>
      <el-form-item label="详细信息">
        <el-input type="textarea" v-model="form.desc"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">立即申请</el-button>
        <!--        <el-button>取消</el-button>-->
      </el-form-item>
    </el-form>
    <br>
    <br>
    <br>
  </div>
</template>

<script>
import SingleUpload from '../../components/upload/singleUpload'
import {reqPublishPet, reqPetByPetName} from '../../api'

const categoryid = 1
export default {
  components: {SingleUpload},
  mounted () {
    if (!localStorage.getItem('token')) {
      this.$message.warning('请您先登录')
      this.$router.push('/login')
    }
  },
  data () {
    return {
      form: {
        name: '测试宠物test1',
        type: '0',
        desc: '救助测试1',
        petphoto: 'https://philhao-pet.oss-cn-beijing.aliyuncs.com/pet/2021-03-09/8865f232-1d8d-4d02-8d73-f03f41a01b8e_16sucai.com (2).jpg?versionId=CAEQExiBgMCgo.3TwBciIDFkMDE2MzQ2ZmRiYzQyZDdhOTRkNTIxOWRmYzIxOWY4',
        flag: true // 设置是否可以提交，宠物名存在时候不向后端请求
      }
    }
  },
  methods: {
    // 检查宠物名称是否存在
    checkPetName () {
      if (this.form.name) {
        let existPetName = reqPetByPetName(this.form.name)
        existPetName.then(data => {
          if (data.code === 500) {
            this.$message.error('宠物名称不可用')
            this.flag = false
          } else {
            this.flag = true
          }
        })
      }
    },
    onSubmit () {
      this.checkPetName()
      if (!this.form.name) {
        this.$message.error('宠物名称不能为空')
      } else if (!this.form.type) {
        this.$message.error('请选择救助类型')
      } else if (!this.form.petphoto) {
        this.$message.error('请上传宠物照片')
      } else if (!this.form.desc) {
        this.$message.error('请输入救助的详细信息')
      } else {
        if (this.flag) {
          this.$confirm('此操作将提交该申请, 是否继续?', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            let promise = reqPublishPet(this.form.petphoto, localStorage.getItem('userid'), this.form.name, this.form.desc, categoryid, 5, 0)
            promise.then(data => {
              if (data.code === 0) {
                this.$router.push('/adopt')
                this.$message({
                  type: 'success',
                  message: '申请成功!'
                })
              } else {
                this.$message.error(data.msg)
              }
            })
          }).catch(() => {
            this.$message({
              type: 'info',
              message: '已取消申请'
            })
          })
          console.log('submit!')
        }
      }
    }
  }
}
</script>
