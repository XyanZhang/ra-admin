import useIsLogin from '@/hooks/useIsLogin';
import { isLogin } from '@/utils';
import { LockOutlined, MobileOutlined, UserOutlined } from '@ant-design/icons';
import {
  LoginForm,
  PageContainer,
  ProFormCaptcha,
  ProFormText,
} from '@ant-design/pro-components';
import { history } from '@umijs/max';
import { Tabs, message, theme } from 'antd';
import { useCallback, useState } from 'react';
import styles from './index.less';
import { LOGIN_SIGN } from '../../constants/index';

type LoginType = 'phone' | 'account';

type LoginParams = {
  username: string;
  mobile: string;
  password?: string;
  captcha?: string;
};

let Login = () => {
  const { token } = theme.useToken();
  const [loginType, setLoginType] = useState<LoginType>('phone');

  const submit = useCallback(async (e: LoginParams) => {
    console.log('submit', e);
    const { mobile, username } = e;
    localStorage.setItem(LOGIN_SIGN, '1');
    if (mobile) localStorage.setItem('loginMobile', mobile);
    if (username) localStorage.setItem('loginUser', username);

    // umi 路由跳转
    history.push('/');
  }, []);

  return (
    <PageContainer>
      <div style={{ backgroundColor: token.colorBgContainer }}>
        <LoginForm
          logo="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
          title="ra-admin"
          subTitle="react antd umi 后台管理系统"
          onFinish={submit}
          // onFocus={onFocus}
        >
          <Tabs
            centered
            activeKey={loginType}
            onChange={(activeKey) => setLoginType(activeKey as LoginType)}
          >
            <Tabs.TabPane key={'account'} tab={'账号密码登录'} />
            <Tabs.TabPane key={'phone'} tab={'手机号登录'} />
          </Tabs>
          {loginType === 'account' && (
            <>
              <ProFormText
                name="username"
                fieldProps={{
                  size: 'large',
                  prefix: <UserOutlined className={'prefixIcon'} />,
                }}
                placeholder={'用户名: admin or user'}
                rules={[
                  {
                    required: true,
                    message: '请输入用户名!',
                  },
                ]}
              />
              <ProFormText.Password
                name="password"
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                placeholder={'密码: ant.design'}
                rules={[
                  {
                    required: true,
                    message: '请输入密码！',
                  },
                ]}
              />
            </>
          )}
          {loginType === 'phone' && (
            <>
              <ProFormText
                fieldProps={{
                  size: 'large',
                  prefix: <MobileOutlined className={'prefixIcon'} />,
                }}
                name="mobile"
                placeholder={'手机号'}
                rules={[
                  {
                    required: true,
                    message: '请输入手机号！',
                  },
                  {
                    pattern: /^1\d{10}$/,
                    message: '手机号格式错误！',
                  },
                ]}
              />
              <ProFormCaptcha
                fieldProps={{
                  size: 'large',
                  prefix: <LockOutlined className={'prefixIcon'} />,
                }}
                captchaProps={{
                  size: 'large',
                }}
                placeholder={'请输入验证码'}
                captchaTextRender={(timing, count) => {
                  if (timing) {
                    return `${count} ${'获取验证码'}`;
                  }
                  return '获取验证码';
                }}
                name="captcha"
                rules={[
                  {
                    required: true,
                    message: '请输入验证码！',
                  },
                ]}
                onGetCaptcha={async () => {
                  message.success('获取验证码成功！验证码为：1234');
                }}
              />
            </>
          )}
          {/* <div
            style={{ marginBlockEnd: 24, }}
          >
            <ProFormCheckbox noStyle name="autoLogin">
              自动登录
            </ProFormCheckbox>
            <a
              style={{
                float: 'right',
              }}
            >
              忘记密码
            </a>
          </div> */}
        </LoginForm>
      </div>
    </PageContainer>
  );
};

export default () => {
  useIsLogin();

  if (isLogin()) {
    return <></>;
  }

  return (
    <div className={styles.centerPos}>
      <Login></Login>
    </div>
  );
};
