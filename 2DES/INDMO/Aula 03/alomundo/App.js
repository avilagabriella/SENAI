import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ImageBackground } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <p></p>
      <p></p>
      <Text>Alo Mundo!</Text>
      <p></p>
      <StatusBar style="auto" />

      <image 
      style=(styles.logo)
      source={{
        url: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fgifer.com%2Fpt%2F6EB&psig=AOvVaw08XnvE1vFjh_ANYESVzTIa&ust=1707567382229000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJCi0K2enoQDFQAAAAAdAAAAABAE'
      }}
      />
      <StatusBar style="auto"/> 

      
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
  logo: {
    width: 100,
    height: 100,
  },
});
