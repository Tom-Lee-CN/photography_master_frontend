<template>
  <div class="main-contaniner">
    <navTab v-on:navChange="navChangeData" :navList="tagList"></navTab>
    <div class="tag-content-container">
      <div class="content-box">
        <div
          class="card-box"
          v-for="(item, index) in cardList"
          :key="index"
          :style="{ height: '220px' }"
        >
          <div class="card-img-box">
            <img :src="item.imgPath" />
          </div>
          <div class="card-info">
            <div class="card-detail">
              <div class="card-title">{{ item.title }}</div>
              <div class="user-info">
                <div class="user-img">
                  <img :src="item.userImgPath" />
                </div>
                <div class="user-name">{{ item.userName }}</div>
                <div class="watch-info">
                  <i class="iconfont icon-browse"></i>
                  <span class="good-text">{{ item.agreeNum }}</span>
                  <i class="iconfont icon-comment"></i>
                  <span class="discussion">{{ item.discussion }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script scoped>
import navTab from "./detailComponets/navTab.vue";

export default {
  name: "exploreArea",
  components: {
    navTab,
  },
  data() {
    return {
      tagList: ["全部", "自然", "城市", "运动", "人物", "优选摄影师"],
      cardList: [
        {
          title: "来自雪山的压迫感",
          imgPath: "src/assets/image/explore-area-img/1.jpg",
          imgHeight: "200px",
          userName: "tom321",
          userImgPath: "src/assets/image/common-img/user.jpg",
          agreeNum: 200,
          discussion: 30,
        },
        {
          title: "来自雪山的压迫感2",
          imgPath: "src/assets/image/explore-area-img/1.jpg",
          imgHeight: "300px",
          userName: "tom321",
          userImgPath: "src/assets/image/common-img/user.jpg",
          agreeNum: 200,
          discussion: 30,
        },
        {
          title: "来自雪山的压迫感3",
          imgPath: "src/assets/image/explore-area-img/1.jpg",
          imgHeight: "300px",
          userName: "tom321",
          userImgPath: "src/assets/image/common-img/user.jpg",
          agreeNum: 200,
          discussion: 30,
        },
        {
          title: "来自雪山的压迫感8",
          imgPath: "src/assets/image/explore-area-img/1.jpg",
          imgHeight: "600px",
          userName: "tom321",
          userImgPath: "src/assets/image/common-img/user.jpg",
          agreeNum: 200,
          discussion: 30,
        },
        {
          title: "来自雪山的压迫感4",
          imgPath: "src/assets/image/explore-area-img/1.jpg",
          imgHeight: "600px",
          userName: "tom321",
          userImgPath: "src/assets/image/common-img/user.jpg",
          agreeNum: 200,
          discussion: 30,
        },
        {
          title: "来自雪山的压迫感5",
          imgPath: "src/assets/image/explore-area-img/1.jpg",
          imgHeight: "200px",
          userName: "tom321",
          userImgPath: "src/assets/image/common-img/user.jpg",
          agreeNum: 200,
          discussion: 30,
        },
        {
          title: "来自雪山的压迫感6",
          imgPath: "src/assets/image/explore-area-img/1.jpg",
          imgHeight: "300px",
          userName: "tom321",
          userImgPath: "src/assets/image/common-img/user.jpg",
          agreeNum: 200,
          discussion: 30,
        },
        {
          title: "来自雪山的压迫感7",
          imgPath: "src/assets/image/explore-area-img/1.jpg",
          imgHeight: "300px",
          userName: "tom321",
          userImgPath: "src/assets/image/common-img/user.jpg",
          agreeNum: 200,
          discussion: 30,
        },
      ],
    };
  },
  computed: {},

  methods: {
    navChangeData(navTagName) {
      console.log(navTagName);
    },
  },
};
</script>

<style scoped>
@import url("../assets/iconfont/iconfont.css");
.main-contaniner {
  width: 100%;
}
.tagList {
  width: 100%;
  padding: 1rem 0;
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 1rem;
}
.tagList a {
  display: inline-block;
  width: 100%;
  height: 100%;
  color: #595959;
  font-weight: 550;
  text-decoration: none;
}
.tagList a:hover {
  width: 100%;
  height: 100%;
  color: #1088f2;
}

.tag-content-container {
  width: 100%;
  background-color: #f7f8f9;
}

.content-box {
  width: 80%;
  padding: 2rem 0;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 1rem;
}
.card-box {
  width: 24%;
  position: relative;
}
.card-img-box {
  width: 100%;
  height: 100%;
}
.card-img-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.card-info {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background-image: linear-gradient(to top, #000, rgba(255, 255, 255, 0.01));
  opacity: 0;
  transition: all 0.5s;
}
.card-info:hover {
  cursor: pointer;
  opacity: 1;
}
.card-detail {
  width: 100%;
  position: absolute;
  left: 3%;
  bottom: 2%;
  color: #fff;
  font-weight: 550;
}
.card-detail img {
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
}
.detail-box {
  width: 95%;
  margin: 0 auto;
}
.user-info {
  margin: 0.3rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

.watch-info {
  margin: auto;
  margin-right: 5%;
}

.user-name,
.good-text,
.discussion {
  margin-left: 0.3rem;
}
.good-text {
  margin-right: 0.5rem;
}
</style>
