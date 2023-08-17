import { Theme } from "@react-navigation/native";
import { ColorValue } from "react-native";
type ThemeAction =
  | { type: 'set_light_theme'; }
  | { type: 'set_dark_theme'; };

export interface ThemeState extends Theme {
  currentTheme: 'light' | 'dark';
  dividerColor: ColorValue;
}

export const lightTheme: ThemeState = {
  currentTheme: 'light',
  dark: false,
  dividerColor: 'red',
  colors: {
    primary: 'red',
    background: 'white',
    card: 'white',
    text: 'black',
    border: 'black',
    notification: 'teal',
  },
};
export const darkTheme: ThemeState = {
  currentTheme: 'dark',
  dark: true,
  dividerColor: 'red',
  colors: {
    primary: 'red',
    background: 'black',
    card: 'white',
    text: 'white',
    border: 'white',
    notification: 'teal',
  },
};



export const themeReducer = (state: ThemeState, action: ThemeAction): ThemeState => {
  switch (action.type) {
    case 'set_light_theme':
      return {
        ...lightTheme
      };
    case 'set_dark_theme':
      return {
        ...darkTheme,
      };
    default:
      return state;
  }
};