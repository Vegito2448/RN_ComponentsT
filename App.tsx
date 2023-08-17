import { createStackNavigator } from '@react-navigation/stack';
import React, { ReactNode } from 'react';
import { ThemeProvider } from './src/context/themeContext/ThemeContext';
import Navigator from './src/navigators/Navigator';
const Stack = createStackNavigator();

/* const customTheme: Theme = {
  dark: true,
  colors: {
    ...DefaultTheme.colors,
    // primary: string,
    // background: string,
    // card: string,
    // text: string,
    // border: string,
    // notification: string,
  }
}; */

const App = () => {
  return (
    <AppState>
      <Navigator />
    </AppState>
  );
};

const AppState = ({ children }: { children?: ReactNode | undefined; }) =>
  <ThemeProvider>
    {children}
  </ThemeProvider>;


export default App;
