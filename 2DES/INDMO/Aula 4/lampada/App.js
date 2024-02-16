import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { StyleSheet, Text, View, image, Switch } from 'react-native';

const icon = require('./asset/icon.png');

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar  = () => {
    setHabilitado(!habilitado);
  }

  return (
    <View style={styles.container}>
      <image
      source={icon}
      style={styles.icon}
      />

      <Switch
      value={habilitado}
      onValueChange={habilitar}
      />
      <image
      source={{
        url: (habilitado)
        ? "./assets/lampadaon.png"
        : "./assets/lampadaoff.png"
      }}
      fontStyle={[style.lampada, opacity: 0.8]} 
      style={(styles.lampada)}
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
    gap: '32px'
  },
  icon: {
    width: '68px',
    height: '68px'
  },
  lampada: {
    width: '200px',
    height: '200px'
  }
  });


