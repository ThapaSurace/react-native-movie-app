import { StatusBar } from "react-native";
import { icons } from "@/constants/icons";
import { ScrollView, Text, View, Image } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 bg-primary">
      {/* Set the status bar style */}
      <StatusBar barStyle="light-content" backgroundColor="#0f172b" />

      <ScrollView
        className="flex-1 px-5"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          minHeight: "100%",
          marginBottom: 10,
        }}
      >
        <Image source={icons.logo} className="w-12 h-10 mt-20 mb-5 mx-auto" />
      </ScrollView>
    </View>
  );
}
