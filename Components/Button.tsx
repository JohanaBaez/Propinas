import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { colors } from "./colors";

const Btn = () => {
  return (
    <>
      <Text style={styles.btn_label}>Select Tip %</Text>
      <View style={{ alignItems: "center" }}>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_style}>
            <Text style={styles.btn_text}>5%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_style_second}>
            <Text style={styles.btn_text}>10%</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_style}>
            <Text style={styles.btn_text}>15%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_style_second}>
            <Text style={styles.btn_text}>25%</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.btn_container}>
          <TouchableOpacity style={styles.btn_style}>
            <Text style={styles.btn_text}>50%</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.btn_custom}>
            <Text
              style={{
                color: colors.darkgrayishcyan,
                fontFamily: "Space-Bold",
                fontSize: 24,
              }}
            >
              Custom
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  btn_label: {
    fontFamily: "Space-Bold",
    marginVertical: 6,
    paddingLeft: 35,
    paddingBottom: 5,
    color: colors.darkgrayishcyan,
  },
  btn_text: {
    color: colors.white,
    fontFamily: "Space-Bold",
    fontSize: 24,
  },
  btn_style: {
    backgroundColor: colors.verydarkcyan,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 5,
    marginRight: 5,
    marginLeft: 30,
    marginTop: 5,
    flex: 2,
  },
  btn_style_second: {
    backgroundColor: colors.verydarkcyan,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 30,
    marginTop: 5,
    flex: 2,
  },
  btn_container: {
    flexDirection: "row",
  },
  btn_custom: {
    backgroundColor: colors.verylightgrayishcyan,
    alignItems: "center",
    justifyContent: "center",
    height: 40,
    borderRadius: 5,
    marginLeft: 5,
    marginRight: 30,
    marginTop: 5,
    flex: 2,
  },
});

export default Btn;