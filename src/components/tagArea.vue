<template>
  <div class="main-contaniner">
    <navTab v-on:navChange="navChangeData" :navList="tagList"></navTab>
    <div class="card-container">
      <div class="content-box">
        <div class="card-box" v-for="(item, index) in contentList" :key="index">
          <div class="img-box">
            <div class="img-box-1">
              <img :src="item.imgA" />
            </div>
            <div class="img-box-2">
              <img :src="item.imgB" />
              <img :src="item.imgC" />
            </div>
          </div>
          <h2 class="img-title">{{ item.title }}</h2>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import navTab from "./detailComponets/navTab.vue";
export default {
  name: "tagArea",
  components: {
    navTab,
  },
  data() {
    return {
      tagList: ["题材", "风格", "设备", "地区"],
      contentList: [
        {
          title: "旅行",
          imgA: "src/assets/image/tagArea-img/1.jpg",
          imgB: "src/assets/image/tagArea-img/2.jpg",
          imgC: "src/assets/image/tagArea-img/3.jpg",
        },
        {
          title: "无人机",
          imgA: "src/assets/image/tagArea-img/1.jpg",
          imgB: "src/assets/image/tagArea-img/2.jpg",
          imgC: "src/assets/image/tagArea-img/3.jpg",
        },
        {
          title: "城市",
          imgA: "src/assets/image/tagArea-img/1.jpg",
          imgB: "src/assets/image/tagArea-img/2.jpg",
          imgC: "src/assets/image/tagArea-img/3.jpg",
        },
        {
          title: "夜景",
          imgA: "src/assets/image/tagArea-img/1.jpg",
          imgB: "src/assets/image/tagArea-img/2.jpg",
          imgC: "src/assets/image/tagArea-img/3.jpg",
        },
        {
          title: "城市",
          imgA: "src/assets/image/tagArea-img/1.jpg",
          imgB: "src/assets/image/tagArea-img/2.jpg",
          imgC: "src/assets/image/tagArea-img/3.jpg",
        },
        {
          title: "夜景",
          imgA: "src/assets/image/tagArea-img/1.jpg",
          imgB: "src/assets/image/tagArea-img/2.jpg",
          imgC: "src/assets/image/tagArea-img/3.jpg",
        },
      ],
    };
  },
  methods: {
    navChangeData(navTagName) {
      console.log(navTagName);
    },
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
}
.card-container {
  width: 100%;
  background-color: #f7f8f9;
}

.content-box {
  width: 80%;
  margin: 0 auto;
  padding: 1rem 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
}

.card-box {
  padding: 1rem;
  border-radius: 5px;
  background-color: #fff;
}
.card-box:hover {
  cursor: pointer;
}
.img-box {
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 0.3rem;
  border-radius: 5px;
}

.img-box-1 img {
  width: 208px;
  height: 208px;
  object-fit: cover;
}

.img-box-2 img {
  display: block;
  width: 145px;
  height: 102px;
}
.img-box-2 img:first-child {
  margin-bottom: 4px;
}

.img-title {
  text-indent: 1.2rem;
}

@media screen and (max-width: 1080px) {
  .content-box {
    width: 99%;
  }
}

@media screen and (max-width: 800px) {
  .content-box {
    width: 100%;
  }
  .card-box {
    width: 100%;
    text-align: center;
  }
  .img-title {
    text-indent: 0;
  }
}
</style>
