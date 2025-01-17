import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import { useSelector, useDispatch } from "react-redux";
import {
  addItem,
  deleteItem,
  togglePurchased,
} from "../redux/shoppingListSlice";

const ShoppingList = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.shoppingList.items);

  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState("");

  const handleAddItem = () => {
    if (name.trim() && quantity.trim()) {
      dispatch(addItem({ name, quantity }));
      setName("");
      setQuantity("");
    }
  };

  const handleTogglePurchased = (id) => {
    dispatch(togglePurchased(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping List</Text>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="Item Name"
          value={name}
          onChangeText={setName}
        />
        <TextInput
          style={styles.input}
          placeholder="Quantity"
          value={quantity}
          onChangeText={setQuantity}
        />
        <TouchableOpacity style={styles.addButton} onPress={handleAddItem}>
          <Text style={styles.addButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <TouchableOpacity onPress={() => handleTogglePurchased(item.id)}>
              <Text
                style={item.purchased ? styles.purchased : styles.notPurchased}
              >
                {item.name} ({item.quantity})
              </Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleDelete(item.id)}>
              <Text style={styles.deleteButton}>X</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
  },
  inputContainer: {
    flexDirection: "row",
    marginBottom: 20,
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#ddd",
    padding: 10,
    marginRight: 10,
    borderRadius: 5,
    backgroundColor: "#fff",
  },
  addButton: {
    backgroundColor: "#2b2d42",
    padding: 10,
    borderRadius: 5,
  },
  addButtonText: {
    color: "#fff",
  },
  listItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#ddd",
  },
  purchased: {
    textDecorationLine: "line-through",
  },
  notPurchased: {
    textDecorationLine: "none",
  },
  deleteButton: {
    color: "#d90429",
  },
});

export default ShoppingList;
