import { Avatar,  Menu, Modal } from 'antd';
import { useCallback, useState, useMemo } from 'react';
import { LogoutOutlined } from '@ant-design/icons';
import styles from './index.less'
import { history } from '@umijs/max'
import { LOGIN_SIGN } from '../../constants/index';

const AccessPage = (props: any) => {
  // const { initialState, setInitialState } = props;
  const [ menuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setMenuVisible(true)
  }, [menuVisible]);

  const handleMouseLeave = useCallback(() => {
    setMenuVisible(false)
  }, [menuVisible]);

  const logout = () => {
    Modal.confirm({
      title: '注销登录',
      content: '确定要注销登录吗？',
      okText: '确定',
      cancelText: '取消',
      okButtonProps: {
        danger: true,
      },
      onOk: () => {
        localStorage.removeItem(LOGIN_SIGN);
        history.replace('/login');
      },
    });
  }

  const menu = useMemo(() => {
    return (
      <Menu>
        <Menu.Item key="logout" onClick={logout}>
          <LogoutOutlined /> 退出登录
        </Menu.Item>
      </Menu>
    )
  }, [menuVisible])

  return (

      <div
        style={{position:'relative'}}
        onMouseEnter={handleMouseEnter} 
        onMouseLeave={handleMouseLeave}
      >
        <Avatar 
          style={{cursor: 'pointer'}}
          src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
        >
        </Avatar>
        {
          menuVisible 
          ? <div className={styles.menuOuter}>{menu}</div>
          : ''
        }
      </div>
  );
};

export default AccessPage;
