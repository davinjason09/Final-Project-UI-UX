import React, { useState } from "react";
import {
  StyleSheet,
  Image,
  Text,
  View,
  Pressable,
  FlatList,
} from "react-native";

export default function Account({ onSelect, onClose }) {
  const [categories] = useState([
    {
      id: 1,
      name: "BCA",
      bgColor: "#D6DCF6",
    },
    {
      id: 2,
      name: "BNI",
      bgColor: "#FFF4E0",
    },
    {
      id: 3,
      name: "BRI",
      bgColor: "#FDDCDC",
    },
    {
      id: 4,
      name: "BSI",
      bgColor: "#EAFFE7",
    },
    {
      id: 5,
      name: "Mandiri",
      bgColor: "#F5F6BC",
    },
    {
      id: 6,
      name: "Cash",
      bgColor: "#F5F6BC",
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
          <Pressable
            style={[styles.circleButton, { backgroundColor: item.bgColor }]}
            onPress={() => {
              onSelect(item);
              onClose();
            }}
          >
            <Text style={{ fontSize: 14, fontWeight: 700 }}>{item.name}</Text>
          </Pressable>
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
    borderColor: "#B0B0B04D",
    borderWidth: 1.5,
  },
});
