

import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './src/screens/FoodOverviewScreen';
import FoodDetails from "./src/screens/FoodDetails"
const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
<Stack.Navigator
  screenOptions={{
    headerStyle: { backgroundColor: '#800000' }, 
    headerTintColor: 'white', 
    contentStyle: { backgroundColor: '#f2f2f2' } 
  }}
>
        <Stack.Screen name="Categories" component={CategoriesScreen} options={{title:'Tüm Kategoriler'}} />
        <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

