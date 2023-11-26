import React, { useState } from "react";
import {
  Keyboard,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { addTransaction } from "../redux/actions";

import ContentPicker from "../components/ContentPicker";
import Account from "../components/Account";
import Category from "../components/Category";
import InputField from "../components/InputField";

export default function AddExpense() {
  const dispatch = useDispatch();
  const nav = useNavigation();

  const [isPickerVisible, setPickerVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState("");
  const [isCategoryModalVisible, setCategoryModalVisible] = useState(false);
  const [isAccountModalVisible, setAccountModalVisible] = useState(false);
  const [pickedCategories, setPickedCategories] = useState(null);
  const [pickedAccount, setPickedAccount] = useState(null);
  const [amount, setAmount] = useState(null);
  const [note, setNote] = useState(null);

  const openCategoryModal = () => setCategoryModalVisible(true);
  const closeCategoryModal = () => setCategoryModalVisible(false);

  const openAccountModal = () => setAccountModalVisible(true);
  const closeAccountModal = () => setAccountModalVisible(false);

  const showDatePicker = () => {
    Keyboard.dismiss();
    setPickerVisible(true);
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

  const handleSave = () => {
    if (!selectedDate || !pickedAccount || !pickedCategories || !amount) {
      alert("Please fill all required fields");
      return;
    }

    const intAmount = parseInt(amount);

    const newIncomeTransaction = {
      id: uuidv4(),
      type: "Expense",
      date: date.toISOString(),
      account: pickedAccount.name,
      category: pickedCategories.name,
      amount: intAmount,
      note: note || "",
    };

    dispatch(addTransaction(newIncomeTransaction));
    nav.navigate("Default");
  };

  return (
    <View style={styles.base}>
      <View style={{ marginTop: 38 }}>
        <InputField
          label="Date"
          placeholder="dd/mm/yy"
          value={selectedDate}
          onPress={showDatePicker}
          editable={false}
          required
        />
        <InputField
          label="Category"
          placeholder="Choose Category"
          value={pickedCategories?.name}
          onPress={openCategoryModal}
          editable={false}
          required
        />
        <InputField
          label="Account"
          placeholder="Choose Account"
          value={pickedAccount?.name}
          onPress={openAccountModal}
          editable={false}
          required
        />
        <InputField
          label="Amount"
          placeholder="Enter Amount"
          keyboardType="numeric"
          maxLength={12}
          onChangeText={setAmount}
          required
        />
        <InputField
          label="Note"
          placeholder="Enter Note"
          maxLength={30}
          onChangeText={setNote}
        />
      </View>
      <TouchableOpacity
        style={styles.saveButton}
        onPress={handleSave}
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
