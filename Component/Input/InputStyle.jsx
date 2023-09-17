import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  root: {
    alignSelf: "stretch",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    backgroundColor: "white",
    height: 50,
    paddingLeft: 25,
    borderRadius: 20,
    fontSize: 20,
  },
  unit: {
    position: "absolute",
    alignSelf: "flex-end",
    paddingRight: 25,
    fontSize: 25,
  },
});
