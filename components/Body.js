import React from "react";
import { StyleSheet, View, Text, TextInput, Image, Button } from "react-native";
import pin from "../assets/punteroUbicacion.png";

const Body = ({ inputDestiny, setInputDestiny, getWeather }) => {
  return (
    <View style={styles.body}>
      <Text style={styles.h1}>
        Con Reservamos planear tu viaje es aún más fácil
      </Text>
      <Text style={styles.h2}>Elige tu destino y compara el clima</Text>
      <View style={styles.contInput}>
        <Image style={styles.imgPin} source={pin} />
        <TextInput
          style={styles.input}
          value={inputDestiny}
          onChangeText={(text) => setInputDestiny(text)}
          placeholder="Destino"
        />
      </View>
      <View style={styles.contInput}>
        <Button color="#ce348b" title="Buscar" onPress={getWeather} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
  },
  h1: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 15,
  },
  h2: {
    fontSize: 14,
    color: "#002674",
    fontWeight: "bold",
    textAlign: "center",
    lineHeight: 25,
    marginBottom: 15,
  },
  contInput: {
    width: "100%",
    height: 65,
    justifyContent: "center",
    marginBottom: 15,
  },
  input: {
    color: "#232323",
    fontWeight: "normal",
    fontSize: 16,
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#e2e2e2",
    lineHeight: 65,
    margin: 0,
    maxHeight: 65,
    minHeight: 65,
    paddingRight: 5,
    paddingLeft: 40,
    textTransform: "capitalize",
    width: "100%",
    height: 65,
  },
  imgPin: {
    position: "absolute",
    left: 10,
    zIndex: 10,
  },
});

export default Body;
