

import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './src/screens/FoodOverviewScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator >
        <Stack.Screen name="Categories" component={CategoriesScreen} />
        <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

