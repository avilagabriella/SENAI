//import { StatusBar } from 'expo-status-bar';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import screenIMC from './componentes/ForeIMC';
import loginForm from './componentes/loginForm';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
        name="Login" 
        component={loginForm} 
        option={{title: 'Bem-vindo'}}/>

        <Stack.Screen
         name="telaIMC" 
         component={screenIMC}
         option={{title: 'Calcule seu IMC'}} />

      </Stack.Navigator>
    </NavigationContainer>
  )
  
};
