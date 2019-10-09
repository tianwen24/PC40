<template>
  <!-- 登录页面 -->
  <div class="login">
    <div class="login-warp">
      <!--log区域 -->
      <div class="loginlogo">
        <img src="./logo_index.png" alt />
      </div>
      <!-- el-form:管理全部表单元素的父容器 ref=vue提供的操作 :model: 表单数据源 -->
      <el-form ref="form" :model="form">
        <!-- el-form-item: 表单域 -->
        <el-form-item>
          <el-input v-model="form.mobile" placeholder="请输入手机号"></el-input>
          <el-form-item>
            <el-row>
              <el-col :span="16">
                <el-input v-model="form.code" placeholder="请输入验证码"></el-input>
              </el-col>
              <el-col :span="8">
                <el-button>获取验证码</el-button>
              </el-col>
            </el-row>
          </el-form-item>
        </el-form-item>
        <el-form-item>
          <el-button class="loginbtn" type="primary" plain>登录</el-button>
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
      }
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
    .loginbtn {
      width: 100%;

    }
    .loginlogo {
      text-align: center;
      img {
        width: 150px;
        padding-bottom: 20px;
      }
    }
  }
}
</style>
