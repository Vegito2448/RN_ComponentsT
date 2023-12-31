import { useContext } from 'react';
import { Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ThemeContext } from '../context/themeContext/ThemeContext';
import { styles } from '../themes/AppTheme';

interface Props {
  title: string;
}

const HeaderTitle = ({ title }: Props) => {
  const { theme: { colors } } = useContext(ThemeContext)
  const { top } = useSafeAreaInsets();
  return (
    <View style={{
      marginTop: top + 20,
      marginBottom: 20,
    }}>
      <Text style={{
        ...styles.title,
        color: colors.text
      }}>{title}</Text>
    </View>
  );
};

export default HeaderTitle;