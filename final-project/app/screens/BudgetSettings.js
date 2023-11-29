import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import MonthYearTab from "../components/MonthYearTab";
import BudgetList from "../components/BudgetList";

export default function BudgetSettings() {
  const [isModalVisible, setModalVisible] = useState({});
  const openModal = (type) =>
    setModalVisible({ ...isModalVisible, [type]: true });
  const closeModal = (type) =>
    setModalVisible({ ...isModalVisible, [type]: false });

  return (
    <View style={styles.base}>
      <View style={{ height: 15 }} />
      <MonthYearTab />
      <View style={{ height: 40 }} />
      <BudgetList
        config
        type="Shopping"
        allocated={50000}
        onPress={() => openModal("Shopping")}
        onClose={() => closeModal("Shopping")}
        isVisible={isModalVisible["Shopping"]}
      />
      <BudgetList
        config
        type="Food"
        allocated={0}
        onPress={() => openModal("Food")}
        onClose={() => closeModal("Food")}
        isVisible={isModalVisible["Food"]}
      />
      <BudgetList
        config
        type="Education"
        allocated={0}
        onPress={() => openModal("Education")}
        onClose={() => closeModal("Education")}
        isVisible={isModalVisible["Education"]}
      />
      <BudgetList
        config
        type="Household"
        allocated={0}
        onPress={() => openModal("Household")}
        onClose={() => closeModal("Household")}
        isVisible={isModalVisible["Household"]}
      />
      <BudgetList
        config
        type="Social"
        allocated={0}
        onPress={() => openModal("Social")}
        onClose={() => closeModal("Social")}
        isVisible={isModalVisible["Social"]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#F7F8F9",
  },
});
