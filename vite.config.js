import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
// https://vite.dev/config/
export default defineConfig({
  // 当部署时必须启用base属性，base表示项目的入口位置
  // base: './',

  plugins: [vue()],

  // 开发服务器选项
  server: {
    // 开发服务器启动时是否自动打开网页
    // open: true,
    // ip地址
    host: "192.168.2.198",
    // 默认启用并允许任意源，传递一个选项对象来调整行为或设为false禁用
    cors: true,
    // 构建配置
    build: {
      // 输出文件夹位置
      outDir: "dist",
      // 静态资源位置
      assetsDir: "assets",
    },
  },
});
