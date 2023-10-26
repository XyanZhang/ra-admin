import { defineConfig } from '@umijs/max';
import routes from './config/route';

export default defineConfig({
  antd: {},
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
});
