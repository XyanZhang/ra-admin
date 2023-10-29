import { ColorPicker } from 'antd';
import ThemeButton from '../ThemeButton';

const AccessPage = (props: any) => {
  const { initialState, setInitialState } = props;

  const onChangeComplete = (color: any) => {
    let val: string = color.toHexString();
    console.log(val);
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
    <>
      <ThemeButton
        initialState={initialState}
        setInitialState={setInitialState}
      ></ThemeButton>
      <ColorPicker onChangeComplete={onChangeComplete} />
    </>
  );
};

export default AccessPage;
