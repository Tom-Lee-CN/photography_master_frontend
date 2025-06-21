<template>
  <div :class="{ 'header-container': true }">
    <div :class="{ 'header-box': true }">
      <div :class="{ 'header-left': true }">
        <a href="javascript:;">摄影大师</a>
      </div>
      <div :class="{ 'header-right': true }">
        <span :class="{ 'search-container': true }">
          <input type="text" placeholder="请输入搜索内容" maxlength="40" />
          <i :class="{ iconfont: true, 'icon-search': true }"></i>
        </span>
        <span :class="{ 'user-sgin': true }" @click="loginEvent"
          >登录/注册</span
        >
      </div>
      <div :class="{ 'header-center': true }">
        <div>
          <ul :class="{ 'tag-list': true }">
            <li
              v-for="(item, index) in tagList"
              :key="index"
              @click="changeTab"
            >
              <a href="javascript:;" :data-tabName="item">{{ item }}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "headerArea",
  data() {
    return {
      currentTab: "首页",
      tagList: ["首页", "探索", "标签", "摄影师", "预留板块"],
    };
  },

  methods: {
    changeTab: function (element) {
      this.currentTab = element.target.getAttribute("data-tabName");
      this.$emit("currentTabEvent", this.currentTab);
    },
    loginEvent() {
      this.$emit("loginEvent");
    },
  },
};
</script>

<style scoped>
@import url("../assets/css/common.css");
@import url("../assets/iconfont/iconfont.css");

.header-container {
  width: 100%;
  height: 6vh;
  line-height: 6vh;
  margin: 0 auto;
  margin: 0 auto;
  background-color: #000;
  color: #fff;
}

a {
  color: #fff;
  text-decoration: none;
}

.header-box {
  width: 90%;
  margin: 0 auto;
  /* display: flex; */
  justify-content: space-between;
  flex: 1;
}

.header-left {
  height: 100%;
  float: left;
  font-size: 1.2rem;
}
.header-center > div {
  width: 60%;
  margin: 0 auto;
}
.tag-list {
  margin: 0 auto;
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  padding: 0;
}

.tag-list a,
.user-sgin {
  display: inline-block;
  cursor: pointer;
  color: #bbbbbb;
  transition: color 0.3s;
}
.tag-list a {
  width: 100%;
  height: 100%;
}

.tag-list a:hover,
.user-sgin:hover {
  color: #fff;
}

.header-right {
  height: 100%;
  float: right;
}
.header-right > span {
  margin-right: 1rem;
}

.search-container {
  display: inline-block;
  position: relative;
  width: 10rem;
  height: 1.8rem;
  line-height: 1.8rem;
  background-color: #dadada;
  border-radius: 5px;
}

.header-right input {
  outline: none;
  width: 8.5rem;
  border: 0;
  text-indent: 0.5rem;
  background-color: transparent;
}

.icon-search {
  position: absolute;
  top: 0%;
  right: 3%;
  color: #000;
}

.icon-search:hover {
  cursor: pointer;
}

@media screen and (max-width: 900px) {
  .header-center {
    display: none;
  }
}

@media screen and (max-width: 400px) {
  .header-left {
    display: none;
  }
}
</style>
