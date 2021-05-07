import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createSharedElementStackNavigator} from 'react-navigation-shared-element';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home';
import Detail from './Detail';
const Stack = createSharedElementStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen
          name="Detail"
          component={Detail}
          options={(navigation) => ({
            headerBackTitleVisible: false,
            cardStyleInterpolator: ({current: {progress}}) => {
              return {
                cardStyle: {
                  opacity: progress,
                },
              };
            },
          })}
          sharedElementsConfig={(route) => {
            const {data} = route.params;
            return [
              {
                id: `item.${data.id}.image`,
                animation: 'fade-in',
                resize: 'clip',
              },
            ];
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
