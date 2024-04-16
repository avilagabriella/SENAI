import { useState } from 'react';
import { StyleSheet, Text, View, Switch, Image, ImageBackground } from 'react-native';

const icon = require('./assets/DC_Logo.webp');
const backgroundImage = require('./assets/');

export default function App() {
  const [habilitado, setHabilitado] = new useState(false);

  const habilitar = () => {
    setHabilitado(!habilitado);
  }
}
{
  return (
    <View style={styles.container}>
      <Image
        source={icon}
        style={styles.icon}
      />
      <Switch
        value={habilitado}
        onValueChange={habilitar}
      />

      <Image
        source={{
          uri: (habilitado)
            ? "https://www.pngegg.com/pt/png-hkxvw"
            : "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngegg.com%2Fpt%2Fsearch%3Fq%3Dbane&psig=AOvVaw0p0kQfrsy1eSLPL32BjB0I&ust=1708178101921000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCMiezrmBsIQDFQAAAAAdAAAAABAE"
        }}
        style={styles.Viloes}
      />
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
  Viloes: {
    width: '125px',
    height: '125px'
  }
});