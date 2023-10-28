import { RunTimeLayoutConfig, history } from '@umijs/max';
import { Modal } from 'antd';
// 运行时配置

// import { LogoutOutlined } from '@ant-design/icons';
// import { Dropdown, theme, ColorPicker  } from 'antd';

// 全局初始化数据配置，用于 Layout 用户信息和权限初始化
// 更多信息见文档：https://umijs.org/docs/api/runtime-config#getinitialstate
export async function getInitialState(): Promise<{ name: string }> {
  return {
    name: 'ra-admin',
  };
}

// umi 会把 config.ts 中的路由帮我们自动注入到配置的 layout 中，这样我们就可以免去手写菜单的烦恼。
export const layout: RunTimeLayoutConfig = () => {
  return {
    logo: 'https://img.alicdn.com/tfs/TB1YHEpwUT1gK0jSZFhXXaAtVXa-28-27.svg',
    menu: {
      locale: false,
    },
    fixSiderbar: true,
    layout: 'mix', //
    splitMenus: false,
    // navTheme: 'realDark',
    contentWidth: 'Fluid',
    // colorPrimary: $PRIMARY,
    siderMenuType: 'sub',
    fixedHeader: true,
    // 通过token修改主题色
    // token: {
    //   sider: {
    //     colorMenuBackground: '#ffffff',
    //   },
    //   header: {
    //     colorBgHeader: '#001529',
    //     colorHeaderTitle: '#ffffff',
    //     heightLayoutHeader: 48,
    //   },
    //   pageContainer: {},
    // },
    logout: (initialState: any) => {
      console.log(initialState);
      Modal.confirm({
        title: '注销登录',
        content: '确定要注销登录吗？',
        okText: '确定',
        cancelText: '取消',
        okButtonProps: {
          danger: true,
        },
        onOk: () => {
          history.replace('/login');
        },
      });
    },
  };
};
