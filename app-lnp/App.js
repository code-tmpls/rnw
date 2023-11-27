import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { useFonts } from 'expo-font';
import * as SplashScreen from "expo-splash-screen";

const App = () =>{
    const [fontsLoaded] = useFonts({
        "HandycheeraRegular": require('./assets/fonts/HandycheeraRegular.otf')
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


 return (<View style={styles.container}>
    <Text style={{ fontFamily:'HandycheeraRegular' }}>Subscribe</Text>
    <Text>Subscribe</Text>
    <Text>Subscribe</Text>
    <Text>Subscribe</Text>
 </View>);
};

const styles = StyleSheet.create({
    container: { marginVertical:40, marginHorizontal: 20 }
});

export default App;