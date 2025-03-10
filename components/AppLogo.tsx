import { icons } from "@/constants/icons";
import { View, Text, Image } from "react-native";
const AppLogo = () => {
  return (
    <View className="flex flex-row items-center gap-2">
      <Image source={icons.logo} className="w-10 h-10" />
      <Text className="text-white font-bold text-xl">MovieMenia</Text>
    </View>
  );
};
export default AppLogo;
