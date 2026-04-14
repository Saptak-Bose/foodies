import CustomText from "@components/global/custom-text";
import { splashStyles } from "@styles/auth-styles";
import { resetAndNavigate } from "@utils/navigation-utils";
import { useEffect } from "react";
import { View, StatusBar, Platform, Image } from "react-native";
import Animated, { FadeInDown } from "react-native-reanimated";

type Props = object;

const SplashScreen = (props: Props) => {
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      resetAndNavigate("LoginScreen");
    }, 3000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <View style={splashStyles.container}>
      <StatusBar hidden={Platform.OS !== "android"} />
      <Image
        style={splashStyles.logoImage}
        source={require("@assets/images/logo_t.png")}
      />
      <Animated.View
        style={splashStyles.animatedContainer}
        entering={FadeInDown.delay(400).duration(800)}
      >
        <Image
          style={splashStyles.treeImage}
          source={require("@assets/images/tree.png")}
        />
        <CustomText
          style={splashStyles.msgText}
          variant="h5"
          fontFamily="Okra-Medium"
          color="#fff"
        >
          Curated cuisine, elegantly delivered to your doorstep.
        </CustomText>
      </Animated.View>
    </View>
  );
};

export default SplashScreen;
