import React, { useState } from "react";
import { Text, TextInput, View } from "react-native";
import { s } from "./InputStyle";

function InputWether({ setInput, values, unit }) {
  const handleChange = (text) => {
    setInput(text);
  };
  return (
    <View style={s.root}>
      <TextInput
        keyboardType="numeric"
        maxLength={3}
        style={s.input}
        placeholder="Input Temperatur"
        value={values}
        onChangeText={handleChange}
      />
      <Text style={s.unit}>&deg;{unit === "F" ? "C" : "F"}</Text>
    </View>
  );
}

export default InputWether;
