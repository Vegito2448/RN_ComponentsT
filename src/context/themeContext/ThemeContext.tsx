import { ReactNode, createContext, useEffect, useReducer } from 'react';
import { AppState, Appearance, useColorScheme } from 'react-native';
import { ThemeState, darkTheme, lightTheme, themeReducer } from './themeReducer';
interface ThemeContextProps {
  theme: ThemeState;
  setDarkTheme: () => void;
  setLightTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextProps);

const ThemeProvider = ({ children }: { children?: ReactNode | undefined; }) => {

  const colorScheme = useColorScheme();
  const [theme, dispatch] = useReducer(themeReducer, colorScheme === 'dark' ? darkTheme : lightTheme);

  useEffect(() => {
    AppState.addEventListener('change', (status) => {
      if (status === "active") {
        Appearance.getColorScheme() === 'dark' ? setDarkTheme() : setLightTheme();
      }
    });
  }, []);

  // useEffect(() => colorScheme === 'dark' ? setDarkTheme() : setLightTheme(), [colorScheme]);


  const setDarkTheme = () => {
    dispatch({ type: 'set_dark_theme' });
    console.log('Dark Theme');
  };
  const setLightTheme = () => {
    dispatch({ type: 'set_light_theme' });
    console.log('Light Theme');
  };



  return (
    <ThemeContext.Provider
      value={{
        theme,
        setDarkTheme,
        setLightTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };

