import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import {
  IconEducation,
  IconFood,
  IconHousehold,
  IconShopping,
  IconSocial,
  IconUser,
} from "../assets";
import { colors } from "../utils";
import Gap from "./Gap";

const CardList = ({
  listbudget,
  listStatistik,
  listbudgetsetting,
  iconUser,
  iconHouseHold,
  iconEducation,
  iconShopping,
  iconFood,
  iconSocial,
  text,
  text2,
  text3,
  text4,
  text5,
  widthInView,
  backColorInView,
  backColorOutView,
  widthOutView,
  onPress,
}) => {
  return (
    <>
      {listbudget && (
        <View
          style={[
            styles.container,
            {
              padding: 12,
              borderBottomWidth: 1,
              borderBottomColor: colors.grey,
            },
          ]}
        >
          <View>
            {iconUser && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.green2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconUser />
              </View>
            )}
            {iconHouseHold && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.green2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconHousehold />
              </View>
            )}
            {iconEducation && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.red2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconEducation />
              </View>
            )}
            {iconSocial && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.yellow2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconSocial />
              </View>
            )}
            {iconFood && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.orange2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconFood />
              </View>
            )}
          </View>
          <Gap width={12} />
          <View style={{ width: "30%" }}>
            <Text style={styles.text}>{text}</Text>
            <Text style={styles.text2}>{text2}</Text>
          </View>
          <Gap width={12} />
          <View style={{ width: "50%" }}>
            <View style={styles.outView(widthOutView, backColorOutView)}>
              <View style={styles.inView(widthInView, backColorInView)} />
              <Text style={[styles.text2, { alignSelf: "flex-end" }]}>
                {text3}
              </Text>
            </View>
            <View
              style={[styles.container, { justifyContent: "space-between" }]}
            >
              <Text style={styles.text4}>{text4}</Text>
              <Text style={styles.text4}>{text5}</Text>
            </View>
          </View>
        </View>
      )}
      {listbudgetsetting && (
        <TouchableOpacity
          style={[
            styles.container,
            {
              padding: 12,
              borderBottomWidth: 1,
              borderBottomColor: colors.grey,
            },
          ]}
          onPress={onPress}
        >
          <View>
            {iconUser && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.green2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconUser />
              </View>
            )}
            {iconShopping && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.blue2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconShopping />
              </View>
            )}
            {iconHouseHold && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.green2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconHousehold />
              </View>
            )}
            {iconEducation && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.red2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconEducation />
              </View>
            )}
            {iconSocial && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.yellow2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconSocial />
              </View>
            )}
            {iconFood && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.orange2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconFood />
              </View>
            )}
          </View>
          <Gap width={12} />
          <View style={styles.container}>
            <Text style={[styles.text5, { flex: 1 }]}>{text}</Text>
            <Text style={styles.text2}>{text2}</Text>
            <Gap width={75} />
          </View>
        </TouchableOpacity>
      )}
      {listStatistik && (
        <TouchableOpacity
          style={[
            styles.container,
            {
              padding: 12,
              borderBottomWidth: 1,
              borderBottomColor: colors.grey,
            },
          ]}
          onPress={onPress}
        >
          <View>
            {iconUser && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.green2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconUser />
              </View>
            )}
            {iconShopping && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.blue2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconShopping />
              </View>
            )}
            {iconHouseHold && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.green2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconHousehold />
              </View>
            )}
            {iconEducation && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.red2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconEducation />
              </View>
            )}
            {iconSocial && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.yellow2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconSocial />
              </View>
            )}
            {iconFood && (
              <View
                style={{
                  height: 46,
                  width: 46,
                  borderRadius: 23,
                  backgroundColor: colors.orange2,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <IconFood />
              </View>
            )}
          </View>
          <Gap width={12} />
          <View style={styles.container}>
            <View style={{ flex: 1 }}>
              <Text style={styles.text5}>{text}</Text>
              {iconFood && (
                <View
                  style={{
                    padding: 4,
                    borderRadius: 2,
                    backgroundColor: colors.orange,
                    alignSelf: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,

                      color: colors.white,
                    }}
                  >
                    {text3}
                  </Text>
                </View>
              )}
              {iconShopping && (
                <View
                  style={{
                    padding: 4,
                    borderRadius: 2,
                    backgroundColor: colors.blue,
                    alignSelf: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,

                      color: colors.white,
                    }}
                  >
                    {text3}
                  </Text>
                </View>
              )}
              {iconSocial && (
                <View
                  style={{
                    padding: 4,
                    borderRadius: 2,
                    backgroundColor: colors.yellow,
                    alignSelf: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,

                      color: colors.white,
                    }}
                  >
                    {text3}
                  </Text>
                </View>
              )}
              {iconHouseHold && (
                <View
                  style={{
                    padding: 4,
                    borderRadius: 2,
                    backgroundColor: colors.green,
                    alignSelf: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,

                      color: colors.white,
                    }}
                  >
                    {text3}
                  </Text>
                </View>
              )}
              {iconEducation && (
                <View
                  style={{
                    padding: 4,
                    borderRadius: 2,
                    backgroundColor: colors.red,
                    alignSelf: "flex-start",
                  }}
                >
                  <Text
                    style={{
                      fontSize: 10,

                      color: colors.white,
                    }}
                  >
                    {text3}
                  </Text>
                </View>
              )}
            </View>
            <Text style={styles.text2}>{text2}</Text>
            <Gap width={75} />
          </View>
        </TouchableOpacity>
      )}
    </>
  );
};

export default CardList;

const styles = StyleSheet.create({
  text: {
    fontSize: 14,
    color: colors.black,
  },
  text2: {
    fontSize: 12,
    color: colors.black,
  },
  text3: {
    fontSize: 14,
    color: colors.black,
  },
  text4: {
    fontSize: 12,
    color: colors.black,
  },
  text5: {
    fontSize: 14,
    color: colors.black,
  },
  inView: (widthInView, backColorInView) => ({
    height: 16,
    width: widthInView,
    backgroundColor: backColorInView,
    borderRadius: 5,
  }),
  outView: (widthOutView, backColorOutView) => ({
    height: 16,
    width: widthOutView,
    backgroundColor: backColorOutView,
    borderRadius: 5,
  }),
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.white,
  },
});
