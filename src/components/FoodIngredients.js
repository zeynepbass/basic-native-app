import { StyleSheet, Text, View } from 'react-native';
import React from 'react'

const FoodIngredients = ({data}) => {
    return data.map((dataIng) => (
        <View key={dataIng} style={styles.listItem}>
          <Text style={styles.itemText}>{dataIng}</Text>
        </View>
      ));
}
const styles = StyleSheet.create({
    listItem: {
      backgroundColor: '#F4F4F2',
      marginVertical: 4,
      marginHorizontal: 12,
      borderRadius: 10,
      paddingVertical: 4,
    },
    itemText: {
      textAlign: 'center',
    },
  });
export default FoodIngredients
