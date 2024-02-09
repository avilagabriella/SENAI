import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <p></p>
      <p></p>
      <Text>Meu nome é Gabriella Godoi Avila</Text>
      <p></p>
      <text>Tenho 17 anos, nasci e cresci em jaguariúna - sp, gosto muito de animais principalmente cachorros.</text>
      <p></p>
      <text>Estou cursando Técnico em desenvolvimento de sistemas no Senai, e no último ano do ensino médio.</text>
        <Image
        style={styles.logo}
        source={{
          uri: 'https://i.gifer.com/mI0.gif',
        }}
      />
      <StatusBar style="auto" />
      
    </View>
   
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  tinyLogo: {
    width: 100,
    height: 100,
  },
  logo: {
    width: 158,
    height: 158,
  },
 
});