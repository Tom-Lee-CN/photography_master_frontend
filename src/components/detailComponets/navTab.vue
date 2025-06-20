<template>
  <ul class="tagList">
    <li v-for="(item, index) in navList" :key="index">
      <a href="javascript:;" @click="changeTab" :data-tab="item">{{ item }}</a>
    </li>
  </ul>
</template>

<script scoped>
export default {
  name: "navTab",
  props: {
    navList: {
      type: Array,
    },
  },
  watch: {},
  data() {
    return {};
  },
  methods: {
    changeTab(element) {
      let currentPage = element.target.getAttribute("data-tab");

      let nodeList = element.target.parentNode.parentNode.children;
      for (let i = 0; i < nodeList.length; i++) {
        nodeList[i].children[0].style.color = "#595959";
      }
      element.target.style.color = " #1088f2";
      this.$emit("navChange", currentPage);
    },
  },
};
</script>

<style>
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
.tagList > li:nth-child(1) > a {
  color: #1088f2;
}
.tagList a:hover {
  width: 100%;
  height: 100%;
  color: #1088f2;
}
</style>
