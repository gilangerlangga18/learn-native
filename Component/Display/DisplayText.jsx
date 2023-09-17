import React from "react";
import { Text } from "react-native";
import { s } from "./DisplayStyle";

function DisplayText({ suhu, unit }) {
  return (
    <Text style={s.textDisplay}>
      {" "}
      {suhu.toFixed(2)} &deg;{unit}
    </Text>
  );
}

export default DisplayText;
