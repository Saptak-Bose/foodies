import CustomText from "@components/global/custom-text";
import Icon from "@components/global/icon";
import { phoneStyles } from "@styles/phone-styles";
import { colors } from "@utils/constants";
import { Pressable, TextInput, View } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  onBlur?: () => void;
};

const PhoneInput = ({ onChangeText, value, onFocus, onBlur }: Props) => {
  return (
    <View style={phoneStyles.container}>
      <Pressable style={phoneStyles.countryPickerContainer}>
        <CustomText variant="h5">🇮🇳</CustomText>
        <Icon
          iconFamily="Ionicons"
          name="caret-down-sharp"
          color={colors.lightText}
          size={12}
        />
      </Pressable>
      <View style={phoneStyles.phoneInputContainer}>
        <CustomText fontFamily="Okra-Bold">+91</CustomText>
        <TextInput
          placeholder="Enter your mobile number..."
          keyboardType="phone-pad"
          value={value}
          placeholderTextColor={colors.lightText}
          onChangeText={onChangeText}
          onBlur={onBlur}
          onFocus={onFocus}
          style={phoneStyles.input}
        />
      </View>
    </View>
  );
};

export default PhoneInput;
