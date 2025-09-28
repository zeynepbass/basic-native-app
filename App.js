import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import FoodOverviewScreen from './screens/FoodOverviewScreen';
import FoodDetailScreen from './screens/FoodDetailScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import FavoritesScreen from './screens/FavoritesScreen';
import { Ionicons } from '@expo/vector-icons';

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