import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
    height: 70,
  },
  input: {
    backgroundColor: "white",
    height: 70,
    paddingLeft: 25,
    borderRadius: 35,
    fontSize: 20,
    color: "black",
  },
  unit: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 25,
    fontSize: 25,
    color: "black",
  },
});
