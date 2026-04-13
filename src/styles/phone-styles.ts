import { StyleSheet } from "react-native";
import { defaultTheme } from "../utils/constants";

const { colors, fonts } = defaultTheme;

export const shadowStyle = {
  shadowOffset: { width: 1, height: 1 },
  shadowOpacity: 0.4,
  elevation: 5,
  shadowRadius: 4,
  shadowColor: colors.lightText,
  borderColor: colors.border,
  borderRadius: 10,
};

export const phoneStyles = StyleSheet.create({
  container: {
    gap: 10,
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 15,
  },
  countryPickerContainer: {
    backgroundColor: "#fff",
    ...shadowStyle,
    padding: 8,
    height: 45,
    flexDirection: "row",
    gap: 5,
    width: "18%",
    justifyContent: "center",
    alignItems: "center",
  },
  phoneInputContainer: {
    backgroundColor: "#fff",
    width: "78%",
    ...shadowStyle,
    paddingHorizontal: 8,
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
  },
  input: {
    height: 45,
    fontFamily: fonts.Medium,
    width: "100%",
  },
  socialContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 60,
    marginTop: 20,
  },
  iconContainer: {
    width: 50,
    height: 50,
    ...shadowStyle,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  gimg: {
    width: 20,
    height: 20,
    resizeMode: "contain",
  },
});
