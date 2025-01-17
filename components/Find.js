import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
} from "react-native";
import { useSelector } from "react-redux";
import ShoppingList from "./ShoppingList";

function Find() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const categories = ["Hats", "T-Shirts", "Trousers", "Shoes", "Custom"];
  const items = useSelector((state) => state.shoppingList.items);

  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name
      .toLowerCase()
      .includes(search.toLowerCase());
    const matchesCategory =
      !selectedCategory || item.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Search</Text>
      <TextInput
        style={styles.input}
        placeholder="Search by Item Name"
        value={search}
        onChangeText={setSearch}
      />
      <View style={styles.categoryContainer}>
        {categories.map((category) => (
          <Button
            key={category}
            title={category}
            onPress={() => setSelectedCategory(category)}
            color={selectedCategory === category ? "blue" : "gray"}
          />
        ))}
      </View>

      <ShoppingList items={filteredItems} />
    </View>
  );
};

export default Find;

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, marginTop: 15 },
  header: { fontSize: 24, marginBottom: 16 },
  input: { borderWidth: 1, padding: 8, marginBottom: 16 },
  categoryContainer: {
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 16,
    gap: 5
  },
  item: { padding: 8, borderBottomWidth: 1 },
  category: { fontSize: 12, color: "gray" },
});
