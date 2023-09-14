import { s } from "./CardProfileStyle";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

export function CardProfileComponent() {
  return (
    <View style={s.contain}>
      <View style={s.container}>
        <View style={s.header}>
          <Image
            style={s.avatar}
            source={{ uri: "https://i.pravatar.cc/#12" }}
          />
          <View style={s.teks}>
            <Text style={s.name}> gilang erlangga</Text>
            <Text style={s.info}> Fullstack Developer</Text>
          </View>
        </View>
        <View style={s.social}>
          <TouchableOpacity style={s.btnSocial}>
            <FontAwesome5
              name="twitter"
              size={30}
              color="#1DA1F2"
              style={s.socialItem}
            />
          </TouchableOpacity>
          <TouchableOpacity style={s.btnSocial}>
            <Entypo
              name="linkedin"
              size={30}
              color="#0077b5"
              style={s.socialItem}
            />
          </TouchableOpacity>
          <TouchableOpacity style={s.btnSocial}>
            <AntDesign
              name="github"
              size={30}
              color="#212529"
              style={s.socialItem}
            />
          </TouchableOpacity>
        </View>
      </View>{" "}
    </View>
  );
}
