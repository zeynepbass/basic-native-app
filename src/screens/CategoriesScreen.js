import { FlatList } from 'react-native';
import React from 'react';
import { CATEGORIES } from '../data/dummy-data';
import CategoryGrid from '../components/CategoryGrid';
export default function CategoriesScreen({ navigation }) {

  const pressHandler = (item) => {
    navigation.navigate('FoodOverview',{
      categoryId:item.id
    })
  };

  const renderCategoryItem = ({ item }) => (
    <CategoryGrid
      title={item.title}
      color={item.color}
      pressFood={() => pressHandler(item)}
    />
  );

  return (
    <FlatList
    data={CATEGORIES}
    keyExtractor={(item) => item.id}
    renderItem={renderCategoryItem}
    numColumns={2}
  />
  );
}


