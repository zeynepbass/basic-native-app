import { StyleSheet, } from 'react-native';

import CategoriesScreen from './src/screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './src/screens/FoodOverviewScreen';
import FoodDetailScreen from './src/screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './src/screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';
import FavoritesContextProvider from './src/store/favoritescontext';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: 'blue' },
        headerTintColor: 'white',
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CategoriesScreen}
        options={{
          title: 'Tüm Kategoriler',
          drawerIcon: () => <Ionicons name="list" size={24} color="black" />,
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          title: 'Favoriler',
          drawerIcon: () => (
            <Ionicons name="ios-star-half" size={24} color="black" />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <FavoritesContextProvider>
        <Stack.Navigator
          screenOptions={{
            headerStyle: { backgroundColor: 'blue' },
            headerTintColor: 'white',
            contentStyle: { backgroundColor: 'lightblue' },
          }}
        >
          <Stack.Screen
            name="Drawer"
            component={DrawerNavigator}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen name="FoodOverview" component={FoodOverviewScreen} />
          <Stack.Screen
            name="FoodDetail"
            component={FoodDetailScreen}
            options={{
              title: 'İçerik',
            }}
          />
        </Stack.Navigator>
      </FavoritesContextProvider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});