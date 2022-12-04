/** @format */

import { StyleSheet, View, Text } from "react-native";

function List({ data }) {
  return data.map((datapoint) => (
    <View style={styles.listItem} key={datapoint}>
      <Text style={styles.itemText}>{datapoint}</Text>
    </View>
  ));
}

export default List;

const styles = StyleSheet.create({
  listItem: {
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingVertical: 4,
    marginHorizontal: 12,
    marginVertical: 4,
    backgroundColor: "#e2b497",
  },
  itemText: {
    textAlign: "center",
    color: "#351401",
  },
});
