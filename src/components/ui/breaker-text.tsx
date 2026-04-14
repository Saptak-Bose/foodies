import CustomText from "@components/global/custom-text";
import { loginStyles } from "@styles/auth-styles";
import { View } from "react-native";

type Props = {
  text: string;
};

const BreakerText = ({ text }: Props) => {
  return (
    <View style={loginStyles.breakerContainer}>
      <View style={loginStyles.horizontalLine} />
      <CustomText
        fontSize={12}
        fontFamily="Okra-Medium"
        style={loginStyles.breakerText}
      >
        {text}
      </CustomText>
      <View style={loginStyles.horizontalLine} />
    </View>
  );
};

export default BreakerText;
