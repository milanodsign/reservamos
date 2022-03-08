import { StyleSheet, View, Text, Image, TouchableOpacity } from "react-native";
import logo from "../assets/logo.png";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";

const Header = ({ view, setView, setInputDestiny }) => {
  const back = () => {
    setView('body')
    setInputDestiny('')
  }
  return (
    <View style={styles.header}>
      {view === "weather" && (
        <TouchableOpacity style={{ position: "absolute", left: 15 }} onPress={() => back()}>
          <Icon name="chevron-left" size={25} style={styles.moreIcon} />
        </TouchableOpacity>
      )}

      <Image source={logo} style={styles.img} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    width: "100%",
    height: 42,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    borderColor: "#cbcbcb",
    borderBottomWidth: 1,
    marginTop: 60,
    paddingBottom: 15,
  },
  img: {},
  moreIcon: {
    color: "#d6d7da",
  },
});

export default Header;
