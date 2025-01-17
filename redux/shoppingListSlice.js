import { createSlice } from "@reduxjs/toolkit";
import { saveToStorage, loadFromStorage } from "../utils/localStorage"; 

const initialState = {
  items: [],
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const newItem = {
        id: Date.now().toString(),
        ...action.payload,
        purchased: false,
        checkedOut: false,
      };
      state.items.push(newItem);
      saveToStorage("shoppingList", state.items);
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      saveToStorage("shoppingList", state.items); 
    },
    editItem: (state, action) => {
      const { id, name, quantity, category, optionalNotes } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.name = name;
        item.quantity = quantity;
        item.category = category;
        item.optionalNotes = optionalNotes;
      }
      saveToStorage("shoppingList", state.items);
    },
    togglePurchased: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.purchased = !item.purchased;
      }
      saveToStorage("shoppingList", state.items);
    },
    checkoutShoppingItem: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.checkedOut = !item.checkedOut;
      }
      saveToStorage("shoppingList", state.items);
    },
    setItems: (state, action) => {
      state.items = action.payload;
      saveToStorage("shoppingList", state.items);
    },
  },
});

export const { addItem, deleteItem, editItem, togglePurchased, setItems, checkoutShoppingItem } = shoppingListSlice.actions;

export default shoppingListSlice.reducer;
