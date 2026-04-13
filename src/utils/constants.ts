import { Dimensions } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

export const BOTTOM_TAB_HEIGHT = 90;
export const screenHeight = Dimensions.get("screen").height;
export const screenWidth = Dimensions.get("screen").width;
export const isBannerHeight = screenHeight * 0.4;

export const colors = {
  primary: "#EF6F1E",
  primary_light: "#EF4F5F",
  text: "#222",
  active_light: "#ECFAF1",
  secondary: "#2D2D2D",
  tertiary: "#F4F4F2",
  background: "#fff",
  background_light: "#F4F6FC",
  border: "#E5E9EF",
  lightText: "#9197A6",
  active: "#019A51",
  dark: "#18171C",
};

export enum Fonts {
  Regular = "Okra-Regular",
  Medium = "Okra-Medium",
  Light = "Okra-MediumLight",
  SemiBold = "Okra-Bold",
  Bold = "Okra-ExtraBold",
}

export const lightColors = [
  "rgba(255,255,255,1)",
  "rgba(255,255,255,0.9)",
  "rgba(255,255,255,0.7)",
  "rgba(255,255,255,0.6)",
  "rgba(255,255,255,0.5)",
  "rgba(255,255,255,0.4)",
  "rgba(255,255,255,0.003)",
];

export const darkWeatherColors = [
  "rgba(54, 67, 92, 1)",
  "rgba(54, 67, 92, 0.9)",
  "rgba(54, 67, 92, 0.8)",
  "rgba(54, 67, 92, 0.2)",
  "rgba(54, 67, 92, 0.0)",
];

export const RV = (number: number) => RFValue(number);

export const defaultTheme = {
  colors,
  margins: {
    sm: RV(4),
    md: RV(8),
    lg: RV(16),
    xl: RV(24),
  },
  device: {
    width: Dimensions.get("screen").width,
    height: Dimensions.get("screen").height,
  },
  fonts: Fonts,
  fontSize: {
    xxs: RV(10),
    xs: RV(12),
    sm: RV(14),
    md: RV(16),
    lg: RV(18),
    xl: RV(20),
    xxl: RV(24),
    xxxl: RV(28),
    base: RV(16),
  },
  border: {
    xl: 50,
    sm: 15,
    md: 10,
    xs: 10,
    lg: 12,
    full: 200,
  },
} as const;

export const fonts = {
  "Okra-Regular": require("../assets/fonts/Okra-Regular.ttf"),
  "Okra-Medium": require("../assets/fonts/Okra-Medium.ttf"),
  "Okra-MediumLight": require("../assets/fonts/Okra-MediumLight.ttf"),
  "Okra-Bold": require("../assets/fonts/Okra-Bold.ttf"),
  "Okra-ExtraBold": require("../assets/fonts/Okra-ExtraBold.ttf"),
};
