import { Pressable, View, Text, Image, ScrollView, StyleSheet } from 'react-native';

import { useLayoutEffect,useContext } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { FOODS } from '../data/dummy-data';
import FoodIngredients from '../components/FoodIngredients';
import { FavoritesContext } from '../store/favoritescontext';

export default function FoodDetailScreen({ route, navigation }) {
  const favouriFoodContext=useContext(FavoritesContext);
  const foodId = route.params.foodId;
  const selectedFood = FOODS.find((food) => food.id === foodId);
  console.log(selectedFood);

  const pressHandler = () => {
    console.log('Tıklandı!');
  };
  const changeFavorite=()=>{
    if(foodIsFavorite){
      favouriFoodContext.removeFavorite(foodId);
    }
    else{
      favouriFoodContext.addFavorite(foodId);
    }
  }
const foodIsFavorite=favouriFoodContext.ids.includes(foodId);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <Pressable
            onPress={pressHandler}
            style={({ pressed }) => (pressed ? styles.pressed : null)}
          >
            <Ionicons name={foodIsFavorite ? 'star' : 'star-outline'} size={24} color="black" onPress={changeFavorite} />
          </Pressable>
        );
      },
    });
  }, [navigation,changeFavorite]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedFood.imageUrl }} />
      <Text style={styles.title}>{selectedFood.title}</Text>
      <View style={styles.details}>
        <Text style={styles.detailItem}>{selectedFood.complexity}</Text>
        <Text style={styles.detailItem}>{selectedFood.affordability}</Text>
      </View>
      <View style={styles.listContainer}>
        <View style={styles.subTitleContainer}>
          <Text style={styles.subTitle}>İçinkiler</Text>
        </View>
        <FoodIngredients data={selectedFood.ingredients} />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 50,
  },

  image: {
    width: '100%',
    height: 300,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 5,
  },

  details: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 5,
  },
  detailItem: {
    marginHorizontal: 4,
    fontSize: 12,
    color: 'gray',
  },
  listContainer: {
    width: '100%',
    paddingHorizontal: 10,
  },
  subTitleContainer: {
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#F4F4F2',
    marginVertical: 5,
  },
  subTitle: {
    color: 'gray',
    fontSize: 24,
    fontWeight: 'bold',
  },
  pressed: {
    opacity: 0.5,
  },
});