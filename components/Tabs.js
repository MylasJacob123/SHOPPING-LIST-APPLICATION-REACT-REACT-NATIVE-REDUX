import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity, Text } from "react-native";
import HomePage from "./HomePage";
import Find from "./Find";

function Tabs() {
  const [activeTab, setActiveTab] = useState("Home");

  const renderContent = () => {
    switch (activeTab) {
      case "Home":
        return <HomePage />;
      case "Search":
        return <Find />;
      default:
        return null;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.content}>{renderContent()}</View>
      <View style={styles.tabBar}>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("Home")}
        >
          <Text
            style={[styles.tabText, activeTab === "Home" && styles.activeTab]}
          >
            Home
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.tabButton}
          onPress={() => setActiveTab("Search")}
        >
          <Text
            style={[styles.tabText, activeTab === "Search" && styles.activeTab]}
          >
            Search
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Tabs;

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { flex: 1 },
  tabBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: "#f5f5f5",
    padding: 10,
  },
  tabButton: { padding: 10 },
  tabText: { fontSize: 16 },
  activeTab: { fontWeight: "bold", color: "#2B2D42" },
});
