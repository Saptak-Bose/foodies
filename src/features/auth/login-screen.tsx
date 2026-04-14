import CustomText from "@components/global/custom-text";
import BreakerText from "@components/ui/breaker-text";
import PhoneInput from "@components/ui/phone-input";
import SocialLogin from "@components/ui/social-login";
import { loginStyles } from "@styles/auth-styles";
import { resetAndNavigate } from "@utils/navigation-utils";
import useKeyboardOffsetHeight from "@utils/use-keyboard-offset-height";
import { useEffect, useRef, useState } from "react";
import {
  ActivityIndicator,
  Animated,
  Image,
  Platform,
  StatusBar,
  TouchableOpacity,
  View,
} from "react-native";

type Props = object;

const LoginScreen = (props: Props) => {
  const animatedValue = useRef(new Animated.Value(0)).current;
  const keyboardOffsetHeight = useKeyboardOffsetHeight();
  const [phone, setPhone] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (keyboardOffsetHeight === 0)
      Animated.timing(animatedValue, {
        toValue: 0,
        duration: 500,
        useNativeDriver: true,
      }).start();
    else
      Animated.timing(animatedValue, {
        toValue: -keyboardOffsetHeight * 0.25,
        duration: 500,
        useNativeDriver: true,
      }).start();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [keyboardOffsetHeight]);

  const handleLogin = async () => {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      resetAndNavigate("UserBottomTab");
    }, 2000);
  };

  return (
    <View style={loginStyles.container}>
      <StatusBar hidden={Platform.OS !== "android"} />
      <Image
        style={loginStyles.cover}
        source={require("@assets/images/login.png")}
      />
      <Animated.ScrollView
        style={{
          transform: [
            {
              translateY: animatedValue,
            },
          ],
        }}
        bounces={false}
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        contentContainerStyle={loginStyles.bottomContainer}
      >
        <CustomText
          fontFamily="Okra-Bold"
          variant="h2"
          style={loginStyles.title}
        >
          Crafted exquisitely for every craving.
        </CustomText>
        <BreakerText text="Log in or Sign up" />
        <PhoneInput
          onBlur={() => {}}
          onFocus={() => {}}
          value={phone}
          onChangeText={setPhone}
        />
        <TouchableOpacity
          style={loginStyles.buttonContainer}
          disabled={loading}
          onPress={handleLogin}
          activeOpacity={0.8}
        >
          {loading ? (
            <ActivityIndicator size="small" color="#fff" />
          ) : (
            <CustomText color="#fff" fontFamily="Okra-Medium" variant="h6">
              Continue
            </CustomText>
          )}
        </TouchableOpacity>
        <BreakerText text="OR" />
        <SocialLogin onPress={handleLogin} />
      </Animated.ScrollView>
      <View style={loginStyles.footer}>
        <CustomText variant="h7">By continuing, you agree to our</CustomText>
        <View style={loginStyles.footerTextContainer}>
          <CustomText style={loginStyles.footerText}>
            Terms of Service
          </CustomText>
          <CustomText style={loginStyles.footerText}>Privacy Policy</CustomText>
          <CustomText style={loginStyles.footerText}>
            Cookie/Content Policy
          </CustomText>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;
