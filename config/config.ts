import { defineConfig } from '@umijs/max';
import { antd } from './antd';
import { routes } from './route';

export default defineConfig({
  antd,
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: 'ra-admin', // 显示在布局左上角的产品名，默认值为包名
    locale: true, // 默认开启，如无需菜单国际化可关闭
  },
  routes,
  npmClient: 'pnpm',
  // proxy: {
  //   '/api': {
  //     target: 'http://192.168.31.240:8000/',
  //     changeOrigin: true,
  //     // 'pathRewrite': { '^/api' : '' },
  //   },
  // },
});
