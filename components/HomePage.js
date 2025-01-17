import React from "react";
import { View, StyleSheet } from "react-native";
import AddItemForm from "./AddItemForm";
import { useDispatch } from "react-redux";
import { addItem } from "../redux/shoppingListSlice";

function HomePage() {
  const dispatch = useDispatch();

  const handleAddItem = (item) => {
    dispatch(addItem(item));
  };

  return (
    <View style={styles.container}>
      <AddItemForm onAddItem={handleAddItem} />
    </View>
  );
};

export default HomePage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: "#fff",
    marginTop: 100,
  },
});
