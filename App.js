import { useState } from "react";
import { StyleSheet, View } from "react-native";

import Body from "./components/Body.js";
import Header from "./components/Header.js";
import Weather from "./components/Weather.js";

export default function App() {
  const [view, setView] = useState("body");
  const [inputDestiny, setInputDestiny] = useState("");
  const [location, setLocation] = useState();
  const [infoWeather, setInfoWeather] = useState();
  const urlSearch = "https://search.reservamos.mx/api/v2/places?q=";

  const searchLocation = async (value) => {
    await fetch(urlSearch + value)
      .then((resp) => resp.json())
      .then((data) => {
        setLocation([data[0].lat, data[0].long, data[0].city_name]);
      });
  };

  const getWeather = async () => {
    await searchLocation(inputDestiny);
    let dt = +new Date();
    await fetch(
      `https://api.openweathermap.org/data/2.5/onecall?lat=${location[0]}&lon=${location[1]}&dt=${dt}&appid=a5a47c18197737e8eeca634cd6acb581&units=metric`
    )
      .then((resp) => resp.json())
      .then((data) => {
        setInfoWeather(data);
      });
    setView("weather");
  };

  return (
    <View style={styles.container}>
      <Header {...{ view, setView, setInputDestiny }} />
      {view === "body" && (
        <Body
          {...{
            inputDestiny,
            setInputDestiny,
            getWeather,
          }}
        />
      )}
      {view === "weather" && infoWeather !== "" && (
        <Weather {...{ setView, infoWeather, location }} />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#fff",
  },
});
