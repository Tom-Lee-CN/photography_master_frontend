<template>
  <div class="main-contaniner">
    <navTab v-on:navChange="navChangeData" :navList="tagList"></navTab>
    <div class="person-container">
      <ul class="person-info-box">
        <li v-for="(item, index) in cameraManList" :key="index">
          <div class="person-box">
            <div class="user-info">
              <div class="user-img">
                <a href="javascript:;"><img :src="item.userImg" /></a>
              </div>
              <div class="user-detail">
                <div class="user-name">{{ item.cameraManName }}</div>
                <div class="user-area">{{ item.userArea }}</div>
                <div class="production-info">
                  {{ item.reputation }}声望 {{ item.fans }}粉丝
                  {{ item.productionNum }}作品
                </div>
                <div><button class="attention-btn">关注</button></div>
              </div>
            </div>

            <div class="user-production">
              <a href="javascript:;">
                <img :src="item.imgA" />
                <img :src="item.imgB" />
                <img :src="item.imgC"
              /></a>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script scoped>
import navTab from "./detailComponets/navTab.vue";
export default {
  name: "cameraMan",
  components: {
    navTab,
  },
  data() {
    return {
      tagList: ["推荐摄影师", "热门摄影师", "新晋摄影师", "签约摄影师"],
      cameraManList: [
        {
          cameraManName: "Tom321",
          userArea: "中国大陆",
          reputation: "111",
          fans: "23",
          productionNum: 123,
          userImg: "src/assets/image/common-img/user.jpg",
          imgA: "src/assets//image/cameraMan-img/1.png",
          imgB: "src/assets//image/cameraMan-img/2.png",
          imgC: "src/assets//image/cameraMan-img/3.png",
        },
        {
          cameraManName: "Tom321",
          userArea: "中国大陆",
          reputation: "111",
          fans: "23",
          productionNum: 123,
          userImg: "src/assets/image/common-img/user.jpg",
          imgA: "src/assets//image/cameraMan-img/1.png",
          imgB: "src/assets//image/cameraMan-img/2.png",
          imgC: "src/assets//image/cameraMan-img/3.png",
        },
        {
          cameraManName: "Tom321",
          userArea: "中国大陆",
          reputation: "111",
          fans: "23",
          productionNum: 123,
          userImg: "src/assets/image/common-img/user.jpg",
          imgA: "src/assets//image/cameraMan-img/1.png",
          imgB: "src/assets//image/cameraMan-img/2.png",
          imgC: "src/assets//image/cameraMan-img/3.png",
        },
        {
          cameraManName: "Tom321",
          userArea: "中国大陆",
          reputation: "111",
          fans: "23",
          productionNum: 123,
          userImg: "src/assets/image/common-img/user.jpg",
          imgA: "src/assets//image/cameraMan-img/1.png",
          imgB: "src/assets//image/cameraMan-img/2.png",
          imgC: "src/assets//image/cameraMan-img/3.png",
        },
        {
          cameraManName: "Tom321",
          userArea: "中国大陆",
          reputation: "111",
          fans: "23",
          productionNum: 123,
          userImg: "src/assets/image/common-img/user.jpg",
          imgA: "src/assets//image/cameraMan-img/1.png",
          imgB: "src/assets//image/cameraMan-img/2.png",
          imgC: "src/assets//image/cameraMan-img/3.png",
        },
        {
          cameraManName: "Tom321",
          userArea: "中国大陆",
          reputation: "111",
          fans: "23",
          productionNum: 123,
          userImg: "src/assets/image/common-img/user.jpg",
          imgA: "src/assets//image/cameraMan-img/1.png",
          imgB: "src/assets//image/cameraMan-img/2.png",
          imgC: "src/assets//image/cameraMan-img/3.png",
        },
        {
          cameraManName: "Tom321",
          userArea: "中国大陆",
          reputation: "111",
          fans: "23",
          productionNum: 123,
          userImg: "src/assets/image/common-img/user.jpg",
          imgA: "src/assets//image/cameraMan-img/1.png",
          imgB: "src/assets//image/cameraMan-img/2.png",
          imgC: "src/assets//image/cameraMan-img/3.png",
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
<style scpoed>
.person-container {
  width: 100%;
  background-color: #f7f8f9;
}

.person-info-box {
  padding: 2rem 0;
}
.person-box {
  width: 60%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 2rem;
  border-bottom: 1px solid rgba(206, 206, 206, 0.45);
}

.user-info {
  display: flex;
}
.user-info > div {
  margin-left: 2rem;
}
.user-img img {
  width: 6rem;
  height: 6rem;
  border-radius: 100%;
}
.user-detail {
  min-width: 150px;
}
.user-detail > div {
  margin-bottom: 0.5rem;
}

.attention-btn {
  width: 4rem;
  height: 2rem;
  line-height: 2rem;
  background-color: #1088f2;
  border: none;
  color: #fff;
  font-weight: 550;
  border-radius: 5px;
  transition: all 0.3s;
}

.attention-btn:hover {
  background-color: #48a2f1;
}

.user-name {
  font-weight: 550;
}
.user-name:hover,
.attention-btn:hover {
  cursor: pointer;
}
.user-area,
.production-info {
  font-size: 0.8rem;
  color: rgba(0, 0, 0, 0.45);
}

.person-info-box > li {
  background-color: #fff;
  padding: 2rem 0;
}

.user-production a {
  height: 136px;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  gap: 1rem;
  overflow: hidden;
}
.user-production img {
  width: 194px;
  height: 100%;
  object-fit: cover;
}

@media screen and (max-width: 1280px) {
  .person-box {
    width: 80%;
  }
  .user-info > div {
    margin-left: 1rem;
  }
  .user-production img {
    margin-right: 0.5rem;
  }
}
@media screen and (max-width: 800px) {
  .person-box {
    width: 100%;
  }
  .user-info > div {
    margin-left: 0.5rem;
  }
  .production-info {
    display: none;
  }

  .user-detail {
    min-width: 4.5rem;
  }
  .user-production img {
    margin-right: 0.5rem;
  }
}
</style>
