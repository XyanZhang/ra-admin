import { useCallback } from 'react';

import {
  Switch
} from 'antd'
import styles from './index.less';

let flexInline = {
  display: 'inline-flex',
};

export default function ThemeButton(props: any) {
  const { setInitialState, initialState } = props;
  if(!initialState.settings.navTheme) {
    return null;
  }
  const changeTheme = useCallback(() => {
    const theme = initialState.settings.navTheme;
    setInitialState((preInitialState: any) => {
      return {
        ...preInitialState,
        settings: {
          ...preInitialState.settings,
          navTheme: theme === 'light' ? 'realDark' : 'light',
        },
      };
    });
  }, [initialState]);
  return (
    <div style={flexInline}>
      <Switch
        onClick={changeTheme}
        checkedChildren={"🌞"}
        unCheckedChildren={"🌙"}
      ></Switch>
    </div>
  );
}
