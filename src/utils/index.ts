import { LOGIN_SIGN } from '../constants/index';

export let isLogin: () => boolean = () => {
  return localStorage.getItem(LOGIN_SIGN) !== null;
};
