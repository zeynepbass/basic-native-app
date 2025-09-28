import { View, FlatList, StyleSheet } from "react-native";
import {useLayoutEffect } from "react";
import React from "react";
import { FOODS, CATEGORIES } from "../data/dummy-data";
import FoodItem from "../components/FoodItem";

export default function FoodOverviewScreen({ route, navigation }) {
  const categoryId = route.params.categoryId;
  const displayedFoods = FOODS.filter((foodItem) => {
    return foodItem.categoryIds.indexOf(categoryId) >= 0;
  });

  useLayoutEffect(() => {
    const categoryTtile = CATEGORIES.find(
      (item) => item.id === categoryId
    ).title;
    navigation.setOptions({
      title: categoryTtile,
    });
  }, [navigation, categoryId]);

  function renderFoodItem(itemData) {
    console.log(itemData.item);
    const foodItemProps = {
      id: itemData.item.id,
      title: itemData.item.title,
      imageUrl: itemData.item.imageUrl,
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
    };

    return <FoodItem {...foodItemProps} />;
  }

  return (
    <View>
      <FlatList
        data={displayedFoods}
        keyExtractor={(item) => item.id}
        renderItem={renderFoodItem}
      />
    </View>
  );
}

const styles = StyleSheet.create({});
