import React, { useEffect, useState } from "react";
import { ImageBackground, Text, TextInput, View } from "react-native";
import Dingin from "../../assets/dingin.png";
import Panas from "../../assets/panas.png";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { s } from "./WeatherStyle";
import InputWether from "../Input/InputWether";
import DisplayText from "../Display/DisplayText";
import { convertToCelcius, confertToFahrenheit } from "../../Utils/Temperature";
import ChangeButton from "../ChangeButton/ChangeButton";

const WeatherComponent = () => {
  const [input, setInput] = useState(0);
  const [backgrounds, setBackground] = useState();
  const [convert, setConvert] = useState({
    suhu: "32",
    unit: "F",
  });

  const changeSuhuC = () => {
    const nilaiSuhu = convertToCelcius(input);
    setConvert({
      suhu: nilaiSuhu,
      unit: "C",
    });
  };
  const changeSuhuF = () => {
    const nilaiSuhu = confertToFahrenheit(input);
    setConvert({
      suhu: nilaiSuhu,
      unit: "F",
    });
  };

  useEffect(() => {
    if (convert.unit === "C") {
      changeSuhuC();
    } else {
      changeSuhuF();
    }

    //
    if (convert.unit === "C" && input >= 97) {
      setBackground(Panas);
    } else if (convert.unit === "F" && input >= 40) {
      setBackground(Panas);
    } else {
      setBackground(Dingin);
    }
  }, [input]);

  return (
    <ImageBackground
      source={backgrounds}
      resizeMode="cover"
      style={s.background}
    >
      <SafeAreaProvider>
        <SafeAreaView style={s.root}>
          <View style={s.workspace}>
            <DisplayText suhu={convert.suhu} unit={convert.unit} />
            <InputWether
              value={input}
              setInput={setInput}
              unit={convert.unit}
            />
            <ChangeButton changeSuhuC={changeSuhuC} changeSuhuF={changeSuhuF} />
          </View>
        </SafeAreaView>
      </SafeAreaProvider>
    </ImageBackground>
  );
};

export default WeatherComponent;
