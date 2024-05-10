import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, ImageBackground } from 'react-native';

// Importar os componentes de cada trilogia
import PrimeiraTrilogia from './components/PrimeiraTrilogia';
import SegundaTrilogia from './components/SegundaTrilogia';
import TerceiraTrilogia from './components/TerceiraTrilogia';
import Dia4 from './components/Dia4';
import DarthVader from './components/DarthVader';

// Configurar a navegação
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Primeira Trilogia" component={PrimeiraTrilogia} />
        <Stack.Screen name="Segunda Trilogia" component={SegundaTrilogia} />
        <Stack.Screen name="Terceira Trilogia" component={TerceiraTrilogia} />
        <Stack.Screen name="Dia 4" component={Dia4} />
        <Stack.Screen name="Darth Vader Fazendo Joia" component={DarthVader} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

// Componente para o menu de navegação
function Menu({ navigation }) {
  return (
    <ImageBackground source={require('./assets/inicio.jpg')} style={styles.background}>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Dia 4')}>
        <Text style={styles.menuText}>Chamada para o Dia 4</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Primeira Trilogia')}>
        <Text style={styles.menuText}>Primeira Trilogia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Segunda Trilogia')}>
        <Text style={styles.menuText}>Segunda Trilogia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Terceira Trilogia')}>
        <Text style={styles.menuText}>Terceira Trilogia</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Darth Vader Fazendo Joia')}>
        <Text style={styles.menuText}>Darth Vader Fazendo Joia</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
    alignItems: "center"
  },
  menuItem: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 10,
    margin: 10,
    borderRadius: 5,
  },
  menuText: {
    color: 'white',
    fontSize: 20,
  }
});
