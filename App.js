import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import ShoppingList from "./components/ShoppingList";
import { setItems } from "./redux/shoppingListSlice";
import { loadFromStorage, saveToStorage } from "./utils/localStorage";
import store from "./redux/store";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchItems = async () => {
      const items = await loadFromStorage("shoppingList");
      if (items) dispatch(setItems(items));
    };

    fetchItems();
  }, [dispatch]);

  useEffect(() => {
    const unsubscribe = store.subscribe(() => {
      saveToStorage("shoppingList", store.getState().shoppingList.items);
    });
    return unsubscribe;
  }, []);

  return <ShoppingList />;
};

export default App;
