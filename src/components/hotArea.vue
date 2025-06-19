<template>
  <div class="wrapper">
    <div class="container">
      <div class="area-title">
        <div class="title-left">
          <h2>{{ hotInfo.title }}</h2>
        </div>
        <div class="title-right">
          <a href="javascript:;">{{ hotInfo.dscription }}</a>
        </div>
      </div>
      <div class="area-box">
        <div
          class="img-box"
          v-for="(iteam, key) in hotInfo.dataList"
          :key="key"
        >
          <a href="javascript:;"> <img :src="iteam.imgPath" /></a>
          <div class="title">{{ iteam.title }}</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "hotArea",
  props: {
    hotInfo: {
      typeof: Object,
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
@import url("../assets/css/common.css");

.container {
  width: 90%;
  margin: 2rem auto;
}

.area-title {
  display: flex;
  justify-content: space-between;
}

.title-right a {
  color: #1890ff;
  line-height: 3rem;
  text-decoration: none;
}
.title-right a:hover {
  color: #1890ff;
  text-decoration: underline#1890ff;
}

.area-box {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1%;
}

.img-box {
  margin-top: 1rem;
  width: 16%;
  overflow: hidden;
  flex: 1;
  min-width: 100px;
}

.img-box img {
  width: 100%;
  object-fit: cover;
  transition: all 1s;
}

.img-box img:hover {
  transform: scaleX(1.1);
}
.title {
  text-indent: 0.3rem;
}
@media screen and (max-width: 1280px) {
  .wrapper {
    width: 100%;
  }
}
</style>
