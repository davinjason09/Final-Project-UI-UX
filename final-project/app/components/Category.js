import React, { useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function Category({ onSelect, onClose }) {
  const [categories] = useState([
    {
      id: 1,
      name: "Shopping",
      icon: require("../icons/shopping.png"),
      bgColor: "#D6DCF6",
      width: 23.33,
      height: 26.44,
    },
    {
      id: 2,
      name: "Food",
      icon: require("../icons/food.png"),
      bgColor: "#FFF4E0",
      width: 24.35,
      height: 22.83,
    },
    {
      id: 3,
      name: "Education",
      icon: require("../icons/education.png"),
      bgColor: "#FDDCDC",
      width: 30.44,
      height: 22.83,
    },
    {
      id: 4,
      name: "Household",
      icon: require("../icons/household.png"),
      bgColor: "#EAFFE7",
      width: 25.28,
      height: 25.28,
    },
    {
      id: 5,
      name: "Education",
      icon: require("../icons/social.png"),
      bgColor: "#F5F6BC",
      width: 30.44,
      height: 22.83,
    },
  ]);

  return (
    <FlatList
      numColumns={3}
      showsHorizontalScrollIndicator={false}
      data={categories}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <View
          style={{
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 45,
            marginHorizontal: 18,
          }}
        >
          <TouchableOpacity
            style={[styles.circleButton, { backgroundColor: item.bgColor }]}
            onPress={() => {
              onSelect(item);
              onClose();
            }}
            activeOpacity={0.5}
          >
            <Image
              source={item.icon}
              style={{
                width: item.width,
                height: item.height,
                resizeMode: "contain",
              }}
            />
          </TouchableOpacity>
          <Text style={{ fontSize: 12, fontWeight: 700 }}>{item.name}</Text>
        </View>
      )}
    />
  );
}

const styles = StyleSheet.create({
  circleButton: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: 70,
    width: 70,
    borderRadius: 35,
    borderColor: "#B0B0B0",
    borderWidth: 1.2,
  },
});
