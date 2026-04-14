import Icon from "@components/global/icon";
import { phoneStyles } from "@styles/phone-styles";
import { Image, TouchableOpacity, View } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

type Props = {
  onPress: () => void;
};

const SocialLogin = ({ onPress }: Props) => {
  return (
    <View style={phoneStyles.socialContainer}>
      <TouchableOpacity style={phoneStyles.iconContainer} onPress={onPress}>
        <Image
          style={phoneStyles.gimg}
          source={require("@assets/icons/google.png")}
        />
      </TouchableOpacity>
      <TouchableOpacity style={phoneStyles.iconContainer} onPress={onPress}>
        <Icon
          name="logo-apple"
          iconFamily="Ionicons"
          color="#222"
          size={RFValue(18)}
        />
      </TouchableOpacity>
      <TouchableOpacity style={phoneStyles.iconContainer} onPress={onPress}>
        <Icon
          name="ellipsis-horizontal-sharp"
          iconFamily="Ionicons"
          color="#222"
          size={RFValue(18)}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SocialLogin;
