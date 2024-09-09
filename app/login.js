import { View, StyleSheet, Image } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import CustomTextInput from './components/customTextInput'
import { router } from 'expo-router'
import { useTheme } from './providers/theme_provider'
import { colors, themeColors } from './themes/colors'
import CustomButton from './components/customButton'
import * as SecureStore from 'expo-secure-store';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState({})
    const { theme } = useTheme();

    const usernameValue = 'username';
    const passwordValue = 'SDDpassword123!';

    const onLogin = () => {
        const error = {}

        if(username == '') {
            error.username = 'No username'
        } 

        if(password == '') {
            error.password = 'No password'
        }
        
        if((username != '' && username != usernameValue) || (password != '' && password != passwordValue)) {
            error.password = 'Invalid password'
        } 
        
        
        if(Object.keys(error).length == 0) {
            router.replace('pokedex/(tabs)')
        } else {
            setError(error)
        }
    }
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <View style={[styles.container, { backgroundColor: themeColors[theme].container}]}>
                <View style={{ marginHorizontal: 20}}>
                <Image source={require('../assets/pokemon-mastermind-of.png')} style={{ resizeMode: 'contain',width: 500, height: 180, margin: 'auto'}} />
                <CustomTextInput value={username} onValueChange={(value) => setUsername(value)} title='Username' error={error.username}/>
                <CustomTextInput value={password} onValueChange={(value) => setPassword(value)} title='Password' secureTextEntry={true} error={error.password}/>
                <CustomButton 
                    text={'LOGIN'} 
                    backgroundColor={colors.green}
                    icon={'right-to-bracket'}
                    btnStyle={{ marginTop: 20 }}
                    onPress={onLogin}
                />
                </View>
                
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignContent: 'center',
        height: '100%',
        width: '100%'
    }
})

export default LoginScreen