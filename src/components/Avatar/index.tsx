import { LogoutOutlined } from '@ant-design/icons';
import { history } from '@umijs/max';
import { Avatar, Menu, Modal } from 'antd';
import QueueAnim from 'rc-queue-anim';
import { useCallback, useMemo, useState } from 'react';
import { LOGIN_SIGN } from '../../constants/index';
import styles from './index.less';

const AccessPage = () => {
  // const { initialState, setInitialState } = props;
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = useCallback(() => {
    setMenuVisible(true);
  }, [menuVisible]);

  const handleMouseLeave = useCallback(() => {
    setMenuVisible(false);
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
  };

  const menu = useMemo(() => {
    return (
      <Menu>
        <Menu.Item key="logout" onClick={logout}>
          <LogoutOutlined /> 退出登录
        </Menu.Item>
      </Menu>
    );
  }, [menuVisible]);

  return (
    <div
      style={{ position: 'relative' }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Avatar
        style={{ cursor: 'pointer' }}
        src="https://github.githubassets.com/images/modules/logos_page/Octocat.png"
      ></Avatar>
      <QueueAnim>
        {menuVisible ? (
          // 必须设置key
          <div className={styles.menuOuter} key="1">
            {menu}
          </div>
        ) : (
          ''
        )}
      </QueueAnim>
    </div>
  );
};

export default AccessPage;
