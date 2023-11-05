export let routes = [
  {
    path: '/',
    redirect: '/home',
  },
  {
    name: '首页',
    path: '/home',
    component: './Home',
  },
  {
    name: '密码登录',
    path: '/login',
    component: './Login',
    layout: false,
  },
  {
    name: '密码登录',
    path: '/login-nice',
    component: './Login/nice',
    layout: false,
  },
  {
    name: '权限演示',
    path: '/access',
    component: './Access',
  },
  {
    name: ' CRUD 示例',
    path: '/table',
    component: './Table',
  },
  {
    name: ' dashboard 示例',
    path: '/dashboard',
    component: './Dashboard',
  },
  {
    name: ' 问卷管理',
    path: '/survey',
    component: './Survey/List',
  },
];
