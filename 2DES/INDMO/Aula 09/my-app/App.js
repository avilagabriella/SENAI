import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PlayerScreen from './screens/PlayerScreen';
import PlaylistsScreen from './screens/PlaylistsScreen';
import AboutUsScreen from './screens/AboutUsScreen';
import MakeMusicScreen from './screens/MakeMusicScreen';

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Player" component={PlayerScreen} />
        <Stack.Screen name="Playlists" component={PlaylistsScreen} />
        <Stack.Screen name="AboutUs" component={AboutUsScreen} />
        <Stack.Screen name="MakeMusic" component={MakeMusicScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
