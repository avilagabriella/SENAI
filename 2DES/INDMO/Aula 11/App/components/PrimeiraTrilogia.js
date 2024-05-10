import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';
import { Audio } from 'expo-av';

const PrimeiraTrilogia = () => {
  // Carregar e reproduzir a música tema
  const playMusic = async () => {
    const soundObject = new Audio.Sound();
    try {
      await soundObject.loadAsync(require('./assets/videoplayback.m4a'));
      await soundObject.playAsync();
    } catch (error) {
      console.error('Erro ao carregar a música', error);
    }
  };

  // Chamar a função para tocar a música quando o componente for montado
  React.useEffect(() => {
    playMusic();
    // Parar a música quando o componente for desmontado
    return soundObject.unloadAsync();
  }, []);

  return (
    <ImageBackground source={require('./assets/primeira_trilogia.jpg')} style={styles.background}>
      <View style={styles.container}>
        <Text style={styles.title}>Primeira Trilogia</Text>
        <Text style={styles.description}>
          A primeira trilogia de Star Wars inclui os filmes:
          "Uma Nova Esperança", "O Império Contra-Ataca" e "O Retorno de Jedi".
        </Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
  },
  description: {
    fontSize: 18,
    color: 'white',
  },
});

export default PrimeiraTrilogia;
