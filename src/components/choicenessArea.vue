<template>
  <div class="choiceness-title wrapper"></div>
  <div class="choiceness-content">
    <div class="wrapper">
      <div class="list-box">
        <div>
          <div class="content-top">
            <h2 class="title">{{ cityInfo.typeTitle }}</h2>
            <div class="link-text"><a href="javascript:;">更多 ></a></div>
          </div>
          <div class="content-bottom">
            <div
              class="content-card"
              v-for="(item, index) in cityInfo.cityList"
              :key="index"
            >
              <div class="content-img-box">
                <img :src="item.imgPath" />
                <div class="play-tag">
                  <i class="iconfont icon-play plat-tag-img"></i>
                </div>
              </div>
              <div class="img-info-box">
                <div class="img-title">{{ item.cityTitle }}</div>
                <div class="device-box">
                  <span class="device-text">设备:</span
                  ><span class="device-info">{{ item.device }}</span>
                </div>
                <div class="wtach-box">
                  <span class="wtach-info"
                    ><i class="iconfont icon-browse"></i
                    >{{ item.watchNum }}</span
                  ><span class="good-info"
                    ><i class="iconfont icon-smile"></i
                    >{{ item.agreeNum }}</span
                  >
                </div>
                <div class="auther-info">
                  <img src="../assets/image/common-img/user.jpg" />
                  <div class="auther-name">{{ item.autherName }}</div>
                  <div class="article-date">{{ item.date }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "choicenessArea",
  data() {
    return {};
  },
  props: {
    cityInfo: {
      type: Object,
    },
  },
};
</script>

<style scoped>
@import url("../assets/iconfont/iconfont.css");

.choiceness-title {
  text-align: center;
}

.choiceness-content {
  width: 100%;
}

.list-box {
  width: 90%;
  margin: 0 auto;
  padding-top: 2rem;
}

.content-top {
  display: flex;
  justify-content: space-between;
}
.content-top a {
  display: inline-block;
  text-decoration: none;
  color: #1890ff;
  height: 4rem;
}
.content-top a:hover {
  text-decoration: underline#1890ff;
}
.content-bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  width: 100%;
}

.content-card {
  flex: 1;
  flex-basis: 200px;
  width: 285px;
  background-color: #fff;
  border-radius: 5px;
}

.content-img-box:hover,
.img-title:hover,
.auther-info img:hover,
.auther-name:hover {
  cursor: pointer;
}

.auther-name,
.img-title {
  transition: color 0.3s;
}
.img-title:hover,
.auther-name:hover {
  color: #1890ff;
}

.img-info-box {
  width: 95%;
  margin: 0 auto;
}
.content-img-box {
  position: relative;
  width: 100%;
}
.play-tag {
  text-align: center;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  top: 30%;
  z-index: 99;
  opacity: 0;
  transition: all 0.3s;
}
.content-img-box:hover .play-tag {
  opacity: 1;
}
.plat-tag-img {
  font-size: 5rem;
}
.content-img-box img {
  width: 100%;
  height: 12.5rem;
  object-fit: cover;
  border-radius: 5px 5px 0 0;
}
.img-title {
  font-size: 0.9rem;
  font-weight: 550;
  margin-top: 0.5rem;
}
.device-text,
.wtach-info,
.good-info,
.auther-info {
  color: #999;
}
.device-text {
  font-size: 0.8rem;
}
.device-info {
  font-size: 0.8rem;
  color: #1088f2;
}

.device-box {
  margin: 0.3rem 0;
}

.wtach-box {
  padding-bottom: 0.5rem;
}
.wtach-info {
  margin-right: 0.5rem;
}
.auther-info {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0.8rem 0;
  border-top: 1px solid rgb(230, 230, 230);
  font-size: 0.8rem;
}
.auther-info img {
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
}

.article-date {
  margin-left: auto;
}
</style>
