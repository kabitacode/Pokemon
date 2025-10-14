import * as React from 'react';
import { } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Provider } from 'react-redux';
import { store } from './src/store';
import { Detail, Home } from './src/screens';
import { RootStackParamList } from './src/config/routes';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {

  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Home' component={Home} />
          <Stack.Screen name='Detail' component={Detail} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}



export default App;
