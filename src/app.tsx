import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import { SettingDrawer } from '@ant-design/pro-components';
import { Link, RequestConfig, RunTimeLayoutConfig } from '@umijs/max';

import { Footer } from 'antd/es/layout/layout';
import RightContent from './components/RightContent';
// import AppStyle from './app.less';

interface Settings {
  layout?: 'mix';
  heightLayoutHeader?: number;
}
type InitState = {
  name?: string;
  settings?: Settings;
};

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<InitState> {
  return {
    name: 'ra-admin',
    settings: {
      layout: 'mix',
      heightLayoutHeader: 64, // header 栏高度
    },
  };
}

// umi 会把 config.ts 中的路由帮我们自动注入到配置的 layout 中，这样我们就可以免去手写菜单的烦恼。

// ProLayout 支持的api https://procomponents.ant.design/components/layout
export const layout: RunTimeLayoutConfig = ({
  initialState,
  setInitialState,
}) => {
  return {
    rightContentRender: () => (
      <RightContent
        initialState={initialState}
        setInitialState={setInitialState}
      />
    ),
    disableContentMargin: false,
    footerRender: () => <Footer />,
    onPageChange: () => {},
    links: true
      ? [
          <Link to="/umi/plugin/openapi" target="_blank" key="openapi">
            <LinkOutlined />
            <span>OpenAPI 文档</span>
          </Link>,
          <Link to="/~docs" key="docs">
            <BookOutlined />
            <span>业务组件文档</span>
          </Link>,
        ]
      : [],
    // logout: (initialState: any) => {

    // },
    menuHeaderRender: undefined,
    // 自定义 403 页面
    // unAccessible: <div>unAccessible</div>,
    // 增加一个 loading 的状态
    childrenRender: (children) => {
      // if (initialState?.loading) return <PageLoading />;
      return (
        <>
          {children}
          <SettingDrawer
            enableDarkTheme
            settings={initialState?.settings}
            onSettingChange={(settings) => {
              console.log(settings);
              setInitialState((preInitialState: any) => ({
                ...preInitialState,
                settings,
              }));
            }}
          />
        </>
      );
    },
    ...initialState?.settings,
  };
};

export const request: RequestConfig = {
  timeout: 1000,
  // other axios options you want
  errorConfig: {
    errorHandler() {},
    errorThrower() {},
  },
  responseInterceptors: [
    // 直接写一个 function，作为拦截器
    (response: any) => {
      // 不再需要异步处理读取返回体内容，可直接在data中读出，部分字段可在 config 中找到
      // const { data = {} as any, config } = response;
      // do something
      return response;
    },
    // 一个二元组，第一个元素是 request 拦截器，第二个元素是错误处理
    [
      (response: any) => {
        return response;
      },
      (error: any) => {
        return Promise.reject(error);
      },
    ],
    // 数组，省略错误处理
    [
      (response: any) => {
        return response;
      },
    ],
  ],
};
