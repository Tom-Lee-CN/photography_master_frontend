<template>
  <headerArea></headerArea>
  <slideShow></slideShow>
  <hotArea :hotInfo="hotInfo"></hotArea>
  <div class="main-title"><span>精选</span></div>
  <div class="main-box">
    <choicenessArea :cityInfo="cityInfo"></choicenessArea>
    <choicenessArea :cityInfo="cityInfo"></choicenessArea>
    <choicenessArea :cityInfo="cityInfo"></choicenessArea>
    <choicenessArea :cityInfo="cityInfo"></choicenessArea>
    <hotArea :hotInfo="hotTagInfo"></hotArea>
  </div>
  <div class="footer-container">
    注意！此网站为开源项目的DEMO展示，请勿将个人信息或其他数据上传至本网站！
  </div>
  <!-- <div :style="{ height: '900px' }">1</div>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" /> -->
</template>
<script>
import headerArea from "./components/headerArea.vue";
import slideShow from "./components/slideShow.vue";
import hotArea from "./components/hotArea.vue";
import choicenessArea from "./components/choicenessArea.vue";
export default {
  name: "app",
  components: {
    slideShow,
    headerArea,
    hotArea,
    choicenessArea,
  },

  data() {
    return {
      cityInfo: {
        typeTitle: "自然",
        cityList: [
          {
            id: 1,
            cityTitle: "北京风景",
            imgPath: "src/assets/image/choiceness-area-img/1.jpg",
            device: "iphone14",
            userImg: "src/assets/image/common-img/user.jpg",
            watchNum: 1321,
            agreeNum: 233,
            autherName: "Tom21",
            date: "2020年1月21日",
          },
          {
            id: 2,
            cityTitle: "三亚风景",
            imgPath: "src/assets/image/choiceness-area-img/2.jpg",
            device: "iphone14",
            userImg: "src/assets/image/common-img/user.jpg",
            watchNum: 1321,
            agreeNum: 233,
            autherName: "Tom21",
            date: "2020年1月21日",
          },
          {
            id: 3,
            cityTitle: "上海风景",
            imgPath: "src/assets/image/choiceness-area-img/4.jpg",
            device: "iphone14",
            userImg: "src/assets/image/common-img/user.jpg",
            watchNum: 1321,
            agreeNum: 233,
            autherName: "Tom21",
            date: "2010年1月21日",
          },
          {
            id: 4,
            cityTitle: "深圳风景",
            imgPath: "src/assets/image/choiceness-area-img/3.jpg",
            device: "iphone14",
            userImg: "src/assets/image/common-img/user.jpg",
            watchNum: 1321,
            agreeNum: 233,
            autherName: "Tom233",
            date: "2021年7月21日",
          },
        ],
      },
      hotInfo: {
        title: "热门航拍点",
        dscription: "热门航拍点集锦",
        dataList: [
          {
            id: 1,
            imgPath: "src/assets/image/hot-area-imgs/1.jpg",
            title: "北京",
          },
          {
            id: 2,
            imgPath: "src/assets/image/hot-area-imgs/2.jpg",
            title: "上海",
          },
          {
            id: 3,
            imgPath: "src/assets/image/hot-area-imgs/3.jpg",
            title: "深圳",
          },
          {
            id: 4,
            imgPath: "src/assets/image/hot-area-imgs/4.jpg",
            title: "成都",
          },
          {
            id: 5,
            imgPath: "src/assets/image/hot-area-imgs/5.jpg",
            title: "广州",
          },
        ],
      },
      hotTagInfo: {
        title: "热门标签",
        dscription: "更多 >",
        dataList: [
          {
            id: 1,
            imgPath: "src/assets/image/hot-area-imgs/1.jpg",
            title: "无人机",
          },
          {
            id: 2,
            imgPath: "src/assets/image/hot-area-imgs/2.jpg",
            title: "航拍",
          },
          {
            id: 3,
            imgPath: "src/assets/image/hot-area-imgs/3.jpg",
            title: "水墨中国",
          },
          {
            id: 4,
            imgPath: "src/assets/image/hot-area-imgs/4.jpg",
            title: "春天来了",
          },
          {
            id: 5,
            imgPath: "src/assets/image/hot-area-imgs/5.jpg",
            title: "广州",
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.main-title {
  width: 100%;
  text-align: center;
  margin-top: 2rem;
}

.main-title span {
  display: inline-block;
  padding-bottom: 0.5rem;
  border-bottom: 3px solid #1088f2;
}
.main-box {
  background-color: #f7f8f9;
  padding-bottom: 3rem;
}

.footer-container {
  padding: 1rem 0;
  text-align: center;
  background-color: #000;
  color: #999;
}
</style>
