/** @format */

import { useLayoutEffect } from "react";
import { Image, StyleSheet, Text, View, ScrollView } from "react-native";
import IconButton from "../components/IconButton";
import MealDetails from "../components/MealDetails";
import List from "../components/MealDetails/List";
import Subtitle from "../components/MealDetails/Subtitle";

import { MEALS } from "../data/dummy-data";

function MealDetailsScreen({ route, navigation }) {
  const mealId = route.params.mealId;

  const selectedMeal = MEALS.find((meal) => meal.id === mealId);

  function headerButtonPressHandler() {
    console.log("Pressed!");
  }

  useLayoutEffect(() => {
    navigation.setOptions({
      headerRight: () => {
        return (
          <IconButton
            name="star"
            color="white"
            onPress={headerButtonPressHandler}
          />
        );
      },
    });
  }, [navigation, headerButtonPressHandler]);

  return (
    <ScrollView style={styles.rootContainer}>
      <Image style={styles.image} source={{ uri: selectedMeal.imageUrl }} />
      <Text style={styles.title}>{selectedMeal.title}</Text>
      <MealDetails
        complexity={selectedMeal.complexity}
        affordability={selectedMeal.affordability}
        duration={selectedMeal.duration}
        textStyle={styles.detailText}
      />
      <View style={styles.outerListContainer}>
        <View style={styles.listContainer}>
          <Subtitle>Ingredients</Subtitle>
          <List data={selectedMeal.ingredients} />
          <Subtitle>Steps</Subtitle>
          <List data={selectedMeal.steps} />
        </View>
      </View>
    </ScrollView>
  );
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
  rootContainer: {
    marginBottom: 35,
  },
  image: {
    width: "100%",
    height: 350,
  },
  title: {
    margin: 8,
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    color: "white",
  },
  detailText: {
    color: "white",
  },
  listContainer: {
    width: "80%",
  },
  outerListContainer: {
    alignItems: "center",
  },
});
