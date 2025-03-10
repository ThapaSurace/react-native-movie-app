import { FlatList, StatusBar } from "react-native";
import { icons } from "@/constants/icons";
import { ScrollView, Text, View, Image } from "react-native";
import SearchBar from "@/components/SearchBar";
import { useRouter } from "expo-router";
import useFetch from "@/services/useFetch";
import { fetchPopularMovies } from "@/services/api";
import MovieCard from "@/components/MovieCard";
import AppLogo from "@/components/AppLogo";

export default function Index() {
  const router = useRouter();

  const {
    data: movies,
    loading: moviesLoading,
    error: moviesError,
  } = useFetch(() =>
    fetchPopularMovies({
      query: "",
    })
  );

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
        <View className="mt-4 mb-2">
          <AppLogo />
        </View>
        <View className="flex-1">
          <SearchBar
            onPress={() => router.push("/search")}
            placeholder="Search for a movie"
            value=""
            onChangeText={() => {}}
          />

          <FlatList
            data={movies}
            renderItem={({ item }) => <MovieCard {...item} />}
            keyExtractor={(item) => item.id.toString()}
            numColumns={3}
            columnWrapperStyle={{
              justifyContent: "flex-start",
              gap: 20,
              paddingRight: 5,
              marginBottom: 10,
            }}
            className="mt-2 pb-32"
            scrollEnabled={false}
            ListHeaderComponent={
              <Text className="text-lg font-semibold text-gray-100 mb-4 mt-4">
                Popular Movies
              </Text>
            }
          />
        </View>
      </ScrollView>
    </View>
  );
}
