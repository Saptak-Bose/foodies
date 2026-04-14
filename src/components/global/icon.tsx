import Ionicons from "@expo/vector-icons/Ionicons";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

type BaseProps = {
  color?: string;
  size: number;
};

type Props =
  | (BaseProps & {
      iconFamily: "Ionicons";
      name: React.ComponentProps<typeof Ionicons>["name"];
    })
  | (BaseProps & {
      iconFamily: "MaterialCommunityIcons";
      name: React.ComponentProps<typeof MaterialCommunityIcons>["name"];
    })
  | (BaseProps & {
      iconFamily: "MaterialIcons";
      name: React.ComponentProps<typeof MaterialIcons>["name"];
    });

const Icon = ({ iconFamily, color, size, name }: Props) => {
  if (iconFamily === "Ionicons") {
    return <Ionicons name={name} size={size} color={color} />;
  }

  if (iconFamily === "MaterialCommunityIcons") {
    return <MaterialCommunityIcons name={name} size={size} color={color} />;
  }

  return <MaterialIcons name={name} size={size} color={color} />;
};

export default Icon;
