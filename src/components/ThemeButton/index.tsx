import { useCallback } from 'react';
import { ReactComponent as DarkSVG } from '../../assets/svg/dark.svg';
import { ReactComponent as LightSVG } from '../../assets/svg/light.svg';

let flexInline = {
  display: 'inline-flex',
};
let btnStyle = {
  display: 'inline-flex',
  cursor: 'pointer',
};
let svgStyle = {
  width: '25px',
  height: '25px',
};

export default function ThemeButton(props: any) {
  const { setInitialState, initialState } = props;
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
      <span style={btnStyle} onClick={changeTheme}>
        {initialState.settings.navTheme !== 'light' ? (
          <LightSVG style={svgStyle} />
        ) : (
          <DarkSVG style={svgStyle} />
        )}
      </span>
    </div>
  );
}
