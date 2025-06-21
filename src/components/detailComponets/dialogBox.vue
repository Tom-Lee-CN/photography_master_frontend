<template>
  <div class="main-container">
    <div
      class="main-box"
      ref="diaLogBox"
      :style="{ 'background-color': dialogColor[dialogInfo.colorType] }"
    >
      {{ dialogInfo.text }}
    </div>
  </div>
</template>

<script>
export default {
  name: "dialogBox",
  props: {
    dialogInfo: Object,
  },
  data() {
    return {
      dialogColor: {
        Success: "rgba(152,251,152, 0.9)",
        Error: "rgba(250,128,114, 0.9)",
        Warning: "rgba(255,165,0, 0.9)",
      },
    };
  },
  mounted: function () {
    let tempThis = this;
    setTimeout(function () {
      tempThis.$refs.diaLogBox.classList.add("move-box");
    }, 0);
  },
};
</script>

<style scoped>
.main-container {
  width: 100%;
  position: fixed;
  top: 20%;
  left: 50%;
  transform: translateX(-50%);
  z-index: 1000;
  text-align: center;
}

.main-box {
  /* width: 30%; */
  display: inline-block;
  margin: 0 auto;
  padding: 1rem 4rem;
  border-radius: 15px;
  position: relative;
  transition: all 1s;
  color: rgb(26, 26, 26);
}
.move-box {
  transform: translateY(-100px);
}
/* .main-box:hover {
  transform: translateY(-100px);
} */
</style>
