import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";
import { AppRouting } from '@AppFeature/AppRouting/index.js';
import { HomeScreen } from "@AppPage/Home/index.js"; 
import { LEDGame } from "@AppPage/LEDGame/index.js";

const App = () =>{
    const [fontsLoaded] = useFonts({
        "HandycheeraRegular": require('./assets/fonts/HandycheeraRegular.otf'),
        "CasualChance": require('./assets/fonts/HandycheeraRegular.otf'),
        "QutcoyTrial": require('./assets/fonts/QutcoyTrial.otf'),
    });

    useEffect(()=>{
        async function prepare() {
            await SplashScreen.preventAutoHideAsync();
        }
        prepare();
    },[]);

    if(!fontsLoaded){
        return undefined;
    } else {
        SplashScreen.hideAsync();
    }


 return (
 <AppRouting 
    initialRouteName="Home" 
    data={[{ name:"Home", component: HomeScreen },
        { name:"AlphabetPlay", component: HomeScreen },
        { name:"NumberPlay", component: LEDGame },
        { name:"GameCredits", component: HomeScreen }]} />
 );
};



export default App;