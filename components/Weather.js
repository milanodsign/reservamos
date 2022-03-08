import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  Image,
} from "react-native";

const Weather = ({ setView, infoWeather, location }) => {
  const MESES = [
    "ene",
    "feb",
    "mar",
    "abr",
    "may",
    "jun",
    "jul",
    "ago",
    "sep",
    "oct",
    "nov",
    "dic",
  ];

  const DIAS = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sab"];

  const formDay = (value) => {
    let f = new Date(value * 1000);
    return `${DIAS[f.getDay()]}, ${f.getDate()} ${MESES[f.getMonth()]}`;
  };
  return (
    <View style={styles.body}>
      <TouchableOpacity onPress={() => setView("body")}>
        <Text>Atrás</Text>
      </TouchableOpacity>
      <View style={styles.w100}>
        <View style={styles.w100}>
          <Text style={styles.textTemp}>
            {parseInt(infoWeather.current.temp)}°
          </Text>
          <Text>
            Sensación Térmica {parseInt(infoWeather.current.feels_like)}°
          </Text>
        </View>
        <View style={styles.w100}>
          <Text style={styles.city}>{location[2]}</Text>
        </View>
      </View>
      <ScrollView style={{ width: "100%", marginBottom: 15 }}>
        {infoWeather.daily &&
          infoWeather.daily.map((item, i) => (
            <View
              key={i}
              style={{
                borderBottomColor: "#c1c1c1",
                borderBottomWidth: 1,
                width: "100%",
                flexDirection: "row",
                height: 40,
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={{ width: "33%", textAlign: "left" }}>
                {formDay(item.dt)}
              </Text>
              <View
                style={{
                  width: "33%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: 20, width: 20 }}
                  source={{
                    uri: `http://openweathermap.org/img/wn/${item.weather[0].icon}.png`,
                  }}
                />
              </View>
              <Text style={{ width: "33%", textAlign: "right" }}>
                {parseInt(item.temp.max)}° / {parseInt(item.temp.min)}°
              </Text>
            </View>
          ))}
      </ScrollView>
    </View>
  );
};

export default Weather;

const styles = StyleSheet.create({
  body: {
    flex: 5,
    justifyContent: "flex-start",
    alignItems: "center",
    paddingLeft: 30,
    paddingRight: 30,
    paddingTop: 15,
  },
  w100: {
    width: "100%",
    alignItems: "center",
  },

  w50: {
    width: "50%",
    justifyContent: "center",
    alignItems: "center",
  },
  textTemp: {
    fontSize: 100,
  },
  city: {
    fontSize: 50,
    marginTop: 40,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#002674",
    textAlign: "center",
  },
});
