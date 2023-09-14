import { StyleSheet } from "react-native";

export const s = StyleSheet.create({
  contain: {
    display: "flex",
    width: "100%",
    height: "100vh",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    width: "80%",
    height: "200px",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
    padding: 20,
    borderRadius: 10,
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  avatar: {
    height: 70,
    width: 70,
    borderRadius: 35,
  },
  name: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 5,
  },
  info: {
    fontSize: 18,
    fontWeight: "bold",
  },
  teks: {
    marginLeft: 5,
    gap: 10,
  },
  socialItem: {
    borderRadius: 35,
    backgroundColor: "#e9ecef",
    padding: 7,
  },
  social: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    paddingTop: 35,
  },
  btnSocial: {
    backgroundColor: "#eee",
    borderRadius: 40,
  },
});
