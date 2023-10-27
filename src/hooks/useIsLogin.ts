import { isLogin } from '@/utils';
import { history } from '@umijs/max';
import { useEffect } from 'react';

export default () => {
  useEffect(() => {
    if (isLogin()) {
      history.push('/'); // 登录状态访问登录页面直接跳转到首页
    }
  }, []);
};
