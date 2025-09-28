

import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './src/screens/FoodOverviewScreen';
import FavoriesScreen from "./src/screens/FavoritesScreen"
import FoodDetails from "./src/screens/FoodDetails"
import { createDrawerNavigator } from '@react-navigation/drawer';
const Stack = createNativeStackNavigator();
const Drawer=createDrawerNavigator();
const DrawerNavigator=()=>{
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Categories" component={CategoriesScreen}/>
      <Drawer.Screen name="Favorites" component={FavoriesScreen}/>
    </Drawer.Navigator>
  )
}
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
       
        <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
        <Stack.Screen name="FoodDetails" component={FoodDetails} options={{title:'İçerik'}} />
        <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown:false}} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

