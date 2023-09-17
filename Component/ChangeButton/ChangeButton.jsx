import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { se } from "./ChangeStyle";

function ChangeButton({ changeSuhuF, changeSuhuC }) {
  return (
    <View style={se.contain}>
      <TouchableOpacity style={se.btnopacitys} onPress={changeSuhuC}>
        <Text style={se.buttons}>&deg;F CONVERT TO &deg;C</Text>
      </TouchableOpacity>
      <TouchableOpacity style={se.btnopacity} onPress={changeSuhuF}>
        <Text style={se.buttons}>&deg;C CONVERT TO &deg;F</Text>
      </TouchableOpacity>
    </View>
  );
}

export default ChangeButton;