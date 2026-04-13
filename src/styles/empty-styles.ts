import { StyleSheet } from "react-native";
import { defaultTheme } from "../utils/constants";

const { colors, device } = defaultTheme;

const baseEmptyStyles = StyleSheet.create({
  emptyImage: {
    width: device.width * 0.9,
    height: device.height * 0.4,
    resizeMode: "contain",
  },
});

export const emptyStyles = {
  ...baseEmptyStyles,
  container: (isLive: boolean = false) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: isLive ? "#000" : colors.background,
  }),
};
