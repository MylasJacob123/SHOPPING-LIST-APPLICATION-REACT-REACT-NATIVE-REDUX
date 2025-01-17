import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [],
};

const shoppingListSlice = createSlice({
  name: "shoppingList",
  initialState,
  reducers: {
    addItem: (state, action) => {
      state.items.push({
        id: Date.now().toString(),
        ...action.payload,
        purchased: false,
      });
    },
    deleteItem: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },
    editItem: (state, action) => {
      const { id, name, quantity } = action.payload;
      const item = state.items.find((item) => item.id === id);
      if (item) {
        item.name = name;
        item.quantity = quantity;
      }
    },
    togglePurchased: (state, action) => {
      const item = state.items.find((item) => item.id === action.payload);
      if (item) {
        item.purchased = !item.purchased;
      }
    },
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
});

export const { addItem, deleteItem, editItem, togglePurchased, setItems } =
  shoppingListSlice.actions;
export default shoppingListSlice.reducer;
