<template>
  <div>
    <div class="background-box" @click="closeLoginBox"></div>
    <div class="main-container">
      <div class="content-box">
        <div class="box-title">
          <h2>{{ isLogin ? "请登录您的账号" : "请注册您的账号" }}</h2>
          <div class="close-box" @click="closeLoginBox">x</div>
        </div>
        <div class="selet-box">
          <div :class="{ active: isLogin }" @click="isLogin = true">登录</div>
          <div :class="{ active: !isLogin }" @click="isLogin = false">注册</div>
        </div>
        <div class="login-box" v-if="isLogin">
          <form id="login-from">
            <label for="userEmail">邮箱</label>
            <input
              id="userEmail"
              type="text"
              placeholder="请输入您的邮箱"
              v-model="loginData.userEmail"
            />
            <label for="userPassword">密码</label>
            <input
              id="userPassword"
              type="password"
              placeholder="请输入您的密码"
              v-model="loginData.userPassword"
            />
            <button class="login-btn" @click.prevent="loginBtn">登录</button>
          </form>
        </div>
        <div class="signUp-box" v-else>
          <form id="login-from">
            <label for="userName">用户名</label>
            <input
              id="userName"
              type="text"
              placeholder="请输入您的用户名"
              v-model="signUpData.userName"
            />
            <label for="userEmail">邮箱</label>
            <input
              id="userEmail"
              type="text"
              placeholder="请输入您的邮箱"
              v-model="signUpData.userEmail"
            />
            <label for="userPassword">密码</label>
            <input
              id="userPassword"
              type="password"
              placeholder="请输入您的密码"
              v-model="signUpData.userPassword"
            />
            <label for="userPasswordAgain">确认密码</label>
            <input
              id="userPasswordAgain"
              type="password"
              placeholder="请再次确认您的密码"
              v-model="signUpData.validPassword"
            />
            <label for="userAddress">所在地</label>
            <select id="userAddress" v-model="signUpData.userAddress">
              <option selected value="china">中国大陆</option>
              <option value="asia">亚洲</option>
              <option value="europe">欧洲</option>
              <option value="Africa">非洲</option>
              <option value="North America">北美</option>
              <option value="south America">南美</option>
              <option value="Oceania">大洋洲</option>
            </select>
            <button class="siginUp-btn" @click.prevent="signUp">注册</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loginView",
  data() {
    return {
      isLogin: true,
      loginData: {
        userEmail: "",
        userPassword: "",
      },
      signUpData: {
        userEmail: "",
        userPassword: "",
        validPassword: "",
        userName: "",
        userAddress: "",
      },
    };
  },

  methods: {
    loginBtn() {
      let mailValid = new RegExp(/[^0-9a-zA-z@.]/);
      let passwordValid = new RegExp(/[^0-9a-zA-z_]/);
      let validResult =
        mailValid.test(this.loginData.userEmail) ||
        passwordValid.test(this.loginData.userPassword) ||
        this.loginData.userEmail.length < 8 ||
        this.loginData.userPassword.length < 8;
      if (validResult) {
        this.$emit("addDialog", {
          text: "无效的账号或密码！",
          colorType: "Error",
        });
        return "无效的账号或密码！";
      }
    },
    signUp() {
      let mailValid = new RegExp(/[^0-9a-zA-z@]/);
      let passwordValid = new RegExp(/[^0-9a-zA-z_.]/);
      let nameValid = new RegExp(/[^a-zA-Z0-9\u4e00-\u9fa5]+$/g);
      console.log(mailValid.test(this.signUpData.userEmail));
      if (
        nameValid.test(this.signUpData.userName) ||
        !/^.{6,16}$/.test(this.signUpData.userName)
      ) {
        this.$emit("addDialog", {
          text: "用户名不合法,请输入汉字、字母或数字且长度在6到16!",
          colorType: "Error",
        });
        return "用户名不合法,请输入汉字、字母或数字且长度在6到16!";
      } else if (
        mailValid.test(this.signUpData.userEmail) ||
        !/@/.test(this.signUpData.userEmail) ||
        !/^.{6,30}$/.test(this.signUpData.userEmail)
      ) {
        this.$emit("addDialog", {
          text: "邮箱不合法，请输入有效的邮箱！",
          colorType: "Error",
        });
        return "邮箱不合法，请输入有效的邮箱！";
      } else if (
        passwordValid.test(this.signUpData.userPassword) ||
        this.signUpData.userPassword != this.signUpData.validPassword ||
        !/^.{8,16}$/.test(this.signUpData.userPassword)
      ) {
        this.$emit("addDialog", {
          text: "密码不合法,请输入字母、数字且长度在8到16并检查确认密码是否一致!",
          colorType: "Error",
        });
        return "密码不合法,请输入字母、数字且长度在8到16并检查确认密码是否一致!";
      } else if (this.signUpData.userAddress == "") {
        this.$emit("addDialog", {
          text: "未选择地址",
          colorType: "Error",
        });
        return "未选择地址";
      }
    },

    closeLoginBox() {
      this.$emit("closeLoginBox");
    },
  },
};
</script>

<style scoped>
.background-box {
  position: fixed;
  width: 100%;
  height: 100%;
  background-color: rgb(0, 0, 0, 0.7);
  z-index: 998;
}
.main-container {
  position: fixed;
  left: 50%;
  top: 10%;
  transform: translateX(-50%);
  min-width: 300px;
  background-color: #fff;

  border-radius: 8px;
  z-index: 999;
}

.box-title {
  display: flex;
  justify-content: space-between;
}
.close-box {
  position: relative;
  left: 8%;
  bottom: 1rem;
  width: 2rem;
  height: 2rem;
  line-height: 2rem;
  text-align: center;
  transition: all 0.3s;
  border-radius: 5px;
}
.close-box:hover {
  cursor: pointer;
  background-color: #e7e7e7;
}
.selet-box {
  display: flex;
  justify-content: space-between;
}
.selet-box div {
  flex: 1;
  text-align: center;
  padding: 1rem 4rem;
  border-radius: 3px;
  margin: 1rem 0;
  transition: all 0.3s;
}
.selet-box div:hover,
.login-btn:hover,
.siginUp-btn:hover {
  cursor: pointer;
}

.selet-box div.active {
  background-color: #1088f2;
  color: #fff;
}

.content-box {
  display: flex;
  flex-flow: column;
  padding: 2rem 2rem;
}

#login-from {
  display: flex;
  flex-flow: column;
}
#login-from input {
  margin-top: 0.2rem;
  margin-bottom: 0.5rem;
  text-indent: 0.5rem;
  height: 2rem;
  line-height: 2rem;
  width: 100%;
  outline: none;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
}
#login-from select {
  margin-top: 0.5rem;
  outline: none;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  height: 2rem;
  width: 100%;
}

.login-btn,
.siginUp-btn {
  margin-top: 0.5rem;
  width: 100%;
  font-size: 1.2rem;
  height: 3rem;
  line-height: 3rem;
  background-color: #4e5ee9;
  border: none;
  outline: none;
  color: #fff;
  border-radius: 5px;
  transition: all 0.3s;
}
.login-btn:hover,
.siginUp-btn:hover {
  background-color: #717deb;
}

@media screen and (max-width: 768px) {
  .selet-box div {
    padding: 1rem 2rem;
  }
}

@media screen and (max-width: 600px) {
  .main-container {
    width: 100%;
  }
}
</style>
