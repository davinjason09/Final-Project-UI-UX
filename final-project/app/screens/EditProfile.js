import React, { useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { editProfile, setProfileImage } from "../redux/actions";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import colors from "../utils/colors";

import Buttons from "../components/Buttons";

export default function EditProfile() {
  const dispatch = useDispatch();
  const nav = useNavigation();

  const user = useSelector((state) => state.user);

  const [username, setUsername] = useState(user.username);
  const [email, setEmail] = useState(user.email);
  const [gender, setGender] = useState(user.gender);
  const [image, setImage] = useState(user.image);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const handleSave = () => {
    dispatch(editProfile(username, email, gender));
    if (image) {
      dispatch(setProfileImage(image));
    }

    nav.goBack();
  };

  return (
    <View style={styles.base}>
      <View style={styles.profileImage}>
        <TouchableOpacity
          onPress={pickImage}
          style={styles.profileImageContainer}
          activeOpacity={0.9}
        >
          <View>
            {image ? (
              <Image
                source={{ uri: image }}
                style={{ width: 106, height: 106, borderRadius: 53 }}
              />
            ) : (
              <MaterialCommunityIcons
                name="account-circle"
                size={110}
                color={colors.white}
              />
            )}
            <View style={styles.cameraIcon(image)}>
              <MaterialCommunityIcons name="camera" size={18} color="#FFFFFF" />
            </View>
          </View>
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Username</Text>
          <TextInput
            placeholder="Enter Username"
            value={username ? username : ""}
            onChangeText={setUsername}
            style={{ textAlign: "right" }}
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Email</Text>
          <TextInput
            placeholder="Enter Email"
            value={email ? email : ""}
            onChangeText={setEmail}
            style={{ textAlign: "right" }}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>
        <View style={styles.infoRow}>
          <Text style={styles.infoText}>Gender</Text>
          <TextInput
            placeholder="Enter Email"
            value={gender ? gender : ""}
            onChangeText={setGender}
            style={{ textAlign: "right" }}
          />
        </View>

        <View style={{ height: 84 }} />
        <Buttons
          width={"85%"}
          height={52}
          color={colors.blue}
          text="Save"
          textSize={16}
          onPress={handleSave}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  base: {
    flex: 1,
    backgroundColor: colors.blue,
  },
  profileImage: {
    flex: 1,
    marginTop: 50,
    alignItems: "center",
  },
  cameraIcon: (image) => ({
    backgroundColor: colors.orange,
    width: 25,
    height: 25,
    borderRadius: 12.5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: image ? -20 : -26,
    marginLeft: image ? 72 : 72,
  }),
  container: {
    width: "100%",
    height: "67.5%",
    backgroundColor: colors.white,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    paddingTop: 54,
    alignItems: "center",
  },
  infoRow: {
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    height: 60,
    paddingHorizontal: 20,
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
  },
});
