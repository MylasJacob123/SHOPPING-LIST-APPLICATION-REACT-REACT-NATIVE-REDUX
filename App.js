import React, { useEffect } from "react";
import { View, StyleSheet } from "react-native";
import { useDispatch } from "react-redux";
import { setItems } from "./redux/shoppingListSlice";
import { loadFromStorage } from "./utils/localStorage"; 
import Tabs from "./components/Tabs";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const loadShoppingList = async () => {
      const savedItems = await loadFromStorage("shoppingList");
      if (savedItems) {
        dispatch(setItems(savedItems));
      }
    };
    loadShoppingList();
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <Tabs />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    padding: 2,
    marginTop: 15,
  },
});

export default App;
