import { BookOutlined, LinkOutlined } from '@ant-design/icons';
import { SettingDrawer } from '@ant-design/pro-components';
import { Link, RunTimeLayoutConfig } from '@umijs/max';
import { Footer } from 'antd/es/layout/layout';
import RightContent from './components/RightContent';
// 运行时配置

// import { LogoutOutlined } from '@ant-design/icons';
// import { Dropdown, theme, ColorPicker  } from 'antd';
interface Settings {
  layout?: 'mix';
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
    },
  };
}

// umi 会把 config.ts 中的路由帮我们自动注入到配置的 layout 中，这样我们就可以免去手写菜单的烦恼。
// export const layout: RunTimeLayoutConfig = (initialState: any) => {
//   console.log(initialState)

//   return {
//     logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
//     menu: {
//       locale: false,
//     },
//     fixSiderbar: true,
//     layout: 'mix', //
//     splitMenus: false,
//     // navTheme: 'realDark',
//     contentWidth: 'Fluid',
//     // colorPrimary: $PRIMARY,
//     siderMenuType: 'sub',
//     fixedHeader: true,
//     // 通过token修改主题色
//     // token: {
//     //   sider: {
//     //     colorMenuBackground: '#ffffff',
//     //   },
//     //   header: {
//     //     colorBgHeader: '#001529',
//     //     colorHeaderTitle: '#ffffff',
//     //     heightLayoutHeader: 48,
//     //   },
//     //   pageContainer: {},
//     // },
//     logout: (initialState: any) => {
//       console.log(initialState);
//       Modal.confirm({
//         title: '注销登录',
//         content: '确定要注销登录吗？',
//         okText: '确定',
//         cancelText: '取消',
//         okButtonProps: {
//           danger: true,
//         },
//         onOk: () => {
//           history.replace('/login');
//         },
//       });
//     },
//     footerRender: (initialState: any) => {
//       return <SettingDrawer
//         // pathname={pathname}
//         enableDarkTheme
//         getContainer={(e: any) => {
//           if (typeof window === 'undefined') return e;
//           return document.getElementById('test-pro-layout');
//         }}
//         disableUrlParams={false}
//       />
//     }
//   };
// };

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
    // waterMarkProps: {
    //   content: initialState?.currentUser?.name,
    // },
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
