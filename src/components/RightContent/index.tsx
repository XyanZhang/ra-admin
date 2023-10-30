import { ColorPicker } from 'antd';
import ThemeButton from '../ThemeButton';
import Avatar from '../Avatar'

import styles from './index.less'
const AccessPage = (props: any) => {
  const { initialState, setInitialState } = props;

  const onChangeComplete = (color: any) => {
    let val: string = color.toHexString();
    setInitialState((preInitialState: any) => ({
      ...preInitialState,
      settings: {
        ...preInitialState.settings,
        layout: 'mix',
        colorPrimary: val,
      },
    }));
  };
  return (
    <div className={styles.headerTools}>
      <ColorPicker 
        className={styles.switchOuter}
        onChangeComplete={onChangeComplete} 
      />
      <ThemeButton
        initialState={initialState}
        setInitialState={setInitialState}
      ></ThemeButton>

      <Avatar></Avatar>
    </div>
  );
};

export default AccessPage;
