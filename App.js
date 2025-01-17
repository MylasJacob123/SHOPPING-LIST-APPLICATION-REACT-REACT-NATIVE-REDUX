import React from "react";
import { View, StyleSheet } from "react-native";
import Tabs from "./components/Tabs";

function App() {
  return (
    <View style={styles.container}> 
      <Tabs /> 
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: "space-between",
    padding: 2,
    marginTop: 15,
  },
});

export default App;
