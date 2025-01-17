import React, { useState } from "react";
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { useDispatch } from "react-redux";
import { deleteItem, editItem, togglePurchased } from "../redux/shoppingListSlice";
import EditItemModal from "./EditItemModal";

function ShoppingList({ items }) {
  const dispatch = useDispatch();

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const handleEditItem = (updatedItem) => {
    dispatch(editItem(updatedItem));
  };

  const handleTogglePurchased = (id) => {
    dispatch(togglePurchased(id));
  };

  const handleDelete = (id) => {
    dispatch(deleteItem(id));
  };

  const openEditModal = (item) => {
    setSelectedItem(item);
    setEditModalVisible(true);
  };

  const closeEditModal = () => {
    setEditModalVisible(false);
    setSelectedItem(null);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Items</Text>
      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <TouchableOpacity onPress={() => handleTogglePurchased(item.id)}>
              <Text style={item.purchased ? styles.purchased : styles.notPurchased}>
                {item.name} ({item.quantity})
              </Text>
            </TouchableOpacity>
            <View style={styles.actions}>
              <TouchableOpacity onPress={() => openEditModal(item)}>
                <Text style={styles.editButton}>Edit</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => handleDelete(item.id)}>
                <Text style={styles.deleteButton}>X</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />
      {editModalVisible && (
        <EditItemModal
          visible={editModalVisible}
          item={selectedItem}
          onClose={closeEditModal}
          onEdit={handleEditItem}
        />
      )}
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
    textAlign: "left",
    marginBottom: 20,
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
  actions: {
    flexDirection: "row",
  },
  editButton: {
    color: "#8D99AE",
    marginRight: 10,
  },
  deleteButton: {
    color: "#d90429",
  },
});

export default ShoppingList;
