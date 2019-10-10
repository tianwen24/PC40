<template>
  <!-- 登录页面 -->
  <div class="login">
    <div class="login-warp">
      <!--log区域 -->
      <div class="loginlogo">
        <img src="./logo_index.png" alt />
      </div>
      <!-- el-form:管理全部表单元素的父容器 ref=vue提供的操作 :model: 表单数据源 -->
      <el-form ref="form" :model="form" :rules="rules">
        <!-- el-form-item: 表单域 -->
        <el-form-item prop="mobile">
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
        </el-form-item>
        <el-form-item prop="code">
          <el-row>
            <el-col :span="16">
              <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
            </el-col>
            <el-col :span="8">
              <el-button>获取验证码</el-button>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item>
          <el-button class="loginbtn" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        mobile: '',
        code: ''
      },
      //   定义规则
      rules: {
        mobile: [
          { required: true, message: '请输入手机号', trigger: 'blur' },
          { min: 11, max: 11, message: '长度为11位数', trigger: 'blur' }
        ],
        code: [
          { required: true, message: '输入验证码', trigger: 'blur' },
          { min: 6, max: 6, message: '长度为6位数', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    //   用户的登录
    login () {
      //    得到 el- form元素
      //    this.$refs.form 结果是一样的  validate;验证当前表单元素中所欲的规则
      this.$refs['form'].validate(valid => {
        //   判断值  valid 为true 说明验证通过 false 不通过
        if (valid) {
        //   console.log('验证通过')  将数据提交到服务器
        } else {

        }
      })
    },
    // 用户的提交
    submitData () {

    }
  }
}
</script>

<style lang="less" scope>
.login {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  .login-warp {
    background-color: #fff;
    padding: 50px;
    min-width: 300px;
    .loginlogo {
      text-align: center;
      img {
        width: 150px;
        padding-bottom: 20px;
      }
    }
    .loginbtn {
      width: 100%;
    }
  }
}
</style>
