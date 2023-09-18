import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { se } from "./ChangeStyle";

function ChangeButton({ changeSuhuF, changeSuhuC, convert }) {
  return (
    <View style={se.contain}>
      {convert.unit == "F" ? (
        <TouchableOpacity style={se.btnopacity} onPress={changeSuhuC}>
          <Text style={se.buttons}>Convert To &deg;C</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity style={se.btnopacity} onPress={changeSuhuF}>
          <Text style={se.buttons}>CONVERT TO &deg;F</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

export default ChangeButton;
