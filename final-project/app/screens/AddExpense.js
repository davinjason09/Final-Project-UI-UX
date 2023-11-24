import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  Pressable,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import DateTimePickerModal from "react-native-modal-datetime-picker";

import ContentPicker from "../components/ContentPicker";
import Account from "../components/Account";
import Category from "../components/Category";

export default function AddExpense() {
  const [isPickerVisible, setPickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const [isAccountModalVisible, setAccountModalVisible] = useState(false);
  const [pickedCategories, setPickedCategories] = useState(null);
  const [pickedAccount, setPickedAccount] = useState(null);

  const openCategoryModal = () => setCategoryModalVisible(true);
  const closeCategoryModal = () => setCategoryModalVisible(false);

  const openAccountModal = () => setAccountModalVisible(true);
  const closeAccountModal = () => setAccountModalVisible(false);

  const showDatePicker = () => {
    setPickerVisible(true);
    Keyboard.dismiss();
  };

  const hideDatePicker = () => setPickerVisible(false);

  const handleCategorySelect = (category) => setPickedCategories(category);
  const handleAccountSelect = (account) => setPickedAccount(account);
  const handleDateConfirm = (selectedDate) => {
    hideDatePicker();
    setDate(selectedDate);
    setSelectedDate(
      `${String(selectedDate.getDate()).padStart(2, "0")}/${String(
        selectedDate.getMonth() + 1
      ).padStart(2, "0")}/${String(selectedDate.getFullYear()).slice(2)}`
    );
  };

  const nav = useNavigation();

  return (
    <View style={styles.base}>
      <View style={{ marginTop: 38 }}>
        <Pressable onPress={showDatePicker}>
          <View style={styles.inputBox}>
            <Text style={{ fontSize: 15, fontWeight: 400, marginLeft: 25 }}>
              Date
            </Text>
            <TextInput
              placeholder="dd/mm/yy"
              placeholderTextColor={"#9B9B9B"}
              style={styles.textInput}
              editable={false}
              value={selectedDate}
            />
          </View>
        </Pressable>
        <Pressable onPress={openCategoryModal}>
          <View style={styles.inputBox}>
            <Text style={{ fontSize: 15, fontWeight: 400, marginLeft: 25 }}>
              Category
            </Text>
            <TextInput
              placeholder="Choose Category"
              placeholderTextColor={"#9B9B9B"}
              style={styles.textInput}
              editable={false}
              value={pickedCategories?.name}
            />
          </View>
        </Pressable>
        <Pressable onPress={openAccountModal}>
          <View style={styles.inputBox}>
            <Text style={{ fontSize: 15, fontWeight: 400, marginLeft: 25 }}>
              Account
            </Text>
            <TextInput
              placeholder="Choose Account"
              placeholderTextColor={"#9B9B9B"}
              style={styles.textInput}
              editable={false}
              value={pickedAccount?.name}
            />
          </View>
        </Pressable>
        <View style={styles.inputBox}>
          <Text style={{ fontSize: 15, fontWeight: 400, marginLeft: 25 }}>
            Amount
          </Text>
          <TextInput
            placeholder="Insert Amount"
            placeholderTextColor={"#9B9B9B"}
            style={styles.textInput}
            keyboardType="numeric"
          />
        </View>
        <View style={styles.inputBox}>
          <Text style={{ fontSize: 15, fontWeight: 400, marginLeft: 25 }}>
            Note
          </Text>
          <TextInput
            placeholder="Add Note"
            placeholderTextColor={"#9B9B9B"}
            style={styles.textInput}
            maxLength={30}
          />
        </View>
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={() => nav.navigate("Default")}
        activeOpacity={0.5}
      >
        <Text style={{ color: "#FFFFFF", fontSize: 14, fontWeight: 700 }}>
          Save
        </Text>
      </TouchableOpacity>

      <DateTimePickerModal
        date={date}
        isVisible={isPickerVisible}
        mode="date"
        onConfirm={handleDateConfirm}
        onCancel={hideDatePicker}
      />

      <ContentPicker
        isvisible={isCategoryModalVisible}
        onClose={closeCategoryModal}
      >
        <Category
          onSelect={handleCategorySelect}
          onClose={closeCategoryModal}
        />
      </ContentPicker>

      <ContentPicker
        isvisible={isAccountModalVisible}
        onClose={closeAccountModal}
      >
        <Account onSelect={handleAccountSelect} onClose={closeAccountModal} />
      </ContentPicker>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: "#F7F8F9",
  },
  inputBox: {
    backgroundColor: "#FFFFFF",
    flexDirection: "row",
    borderRadius: 5,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "space-between",
    width: "86.4%",
    height: 56,
    elevation: 5,
    shadowColor: "#000000",
    marginBottom: 5,
  },
  textInput: {
    fontSize: 12,
    marginRight: 25,
    width: "40%",
    textAlign: "right",
    color: "#000000",
  },
  saveButton: {
    width: "86.4%",
    height: 36,
    alignSelf: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 4,
    backgroundColor: "#2340DC",
    marginTop: 38,
  },
});
