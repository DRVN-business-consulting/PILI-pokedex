import { View, Text, Switch, Button, StyleSheet } from 'react-native'
import React from 'react'
import { useTheme } from '../../providers/theme_provider'
import { colors, themeColors } from '../../themes/colors';
import { router } from 'expo-router';
import CustomButton from '../../components/customButton';
import { SafeAreaView } from 'react-native-safe-area-context';

const SettingScreen = () => {

    const { theme, toggleTheme } = useTheme();
  return (
    <SafeAreaView style={{ flex: 1}}>
      <View style={[styles.container, { backgroundColor: themeColors[theme].container}]}>
        <View style={[{marginBottom: 10}]}>
          <Text style={[styles.label, { color: themeColors[theme].textColor, marginBottom: 10 }]}>Toggle Theme</Text>
          <CustomButton 
            text={`${theme} MODE`} 
            backgroundColor={colors.green}
            icon={'circle-half-stroke'}
            onPress={toggleTheme}
            btnStyle={{ marginBottom: 10}}
        />
        </View>
        <CustomButton 
            text='Logout' 
            backgroundColor={colors.green}
            icon={'right-from-bracket'}
            onPress={() => router.replace('/')}
        />
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create(
  {
    container: { flex: 1, padding: 20},
    label: { fontSize: 18}
  }
)

export default SettingScreen