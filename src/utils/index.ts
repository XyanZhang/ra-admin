export let isLogin: () => boolean = () => {
  return localStorage.getItem('loginToken') !== null;
};
