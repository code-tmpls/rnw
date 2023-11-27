import React, { useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Audio } from 'expo-av';

export const HomeScreen = ({ navigation }) =>{
 const [sound, setSound] = React.useState();

 async function playSound() {
    console.log('Loading Sound');
    const { sound } = await Audio.Sound.createAsync( require('@AppAssets/media/bg.mp3'),
    { shouldPlay: true, isLooping: true }
    );
    setSound(sound);

    console.log('Playing Sound');
    await sound.playAsync();
  }

  useEffect(()=>{
    playSound();
  },[]);

  React.useEffect(() => {
    return sound
      ? () => {
          console.log('Unloading Sound');
          sound.unloadAsync();
        }
      : undefined;
  }, [sound]);

 return (<ImageBackground source={require('@AppAssets/images/bg.jpg')} style={styles.backgroundImage}>
 <StatusBar translucent backgroundColor="#fff" style="auto" height="5%"  />
 <View style={{ flex: 3 }}>
    <View style={styles.container}>
        <Text style={styles.title}>LED</Text>
        <Text style={styles.subTitle}>AlphaNumeric Game</Text>
        <View style={{ marginTop: 55, borderWidth:1, borderColor:'#000', borderRadius: 8, padding: 10 }}>
            <View style={{ justifyContent:'center', alignItems: 'center', borderRadius: 8, }}>
                <Text style={{ fontFamily:'QutcoyTrial' }}>CHOOSE YOUR GAME</Text>
            </View>
           
            <View style={{ marginTop: 8, backgroundColor:'brown', justifyContent:'center', alignItems: 'center', borderRadius: 8, }}>
                <Text style={{ fontFamily:'QutcoyTrial', padding: 10, color:'#fff', fontSize: 15 }}>Alphabets Play</Text>
            </View>
            
            <TouchableOpacity onPress={()=>navigation.navigate('NumberPlay')}>
            <View style={{ marginTop: 8, backgroundColor:'brown', justifyContent:'center', alignItems: 'center', borderRadius: 8, }}>
                <Text style={{  fontFamily:'QutcoyTrial', padding: 10, color:'#fff', fontSize: 15 }}>Numbers Play</Text>
            </View>
            </TouchableOpacity>
        </View>
        <View style={{ marginTop: 8, backgroundColor:'brown', justifyContent:'center', alignItems: 'center', borderRadius: 8, }}>
            <Text style={{ padding: 10, color:'#fff', fontSize: 15, fontFamily:'QutcoyTrial' }}>Game Credits</Text>
        </View>
        <View style={{ marginTop: 8, backgroundColor:'brown', justifyContent:'center', alignItems: 'center', borderRadius: 8, }}>
            <Text style={{ padding: 10, color:'#fff', fontSize: 15, fontFamily:'QutcoyTrial' }}>Exit Game</Text>
        </View>
    </View>
 </View>
</ImageBackground>);
};

const styles = StyleSheet.create({
    backgroundImage: { flex: 1, resizeMode: 'cover', justifyContent: 'center', alignItems: 'flex-start' },
    container: { marginVertical:140, marginHorizontal: 20 },
    title: { fontFamily:'QutcoyTrial', fontSize: 28, color: 'brown' },
    subTitle: { fontFamily:'CasualChance', fontSize: 38, color: 'brown' }
});