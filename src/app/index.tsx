import { View, Text, ScrollView } from "react-native";
import Header from "../components/header";
import Constants from "expo-constants";
import Banner from "../components/banner";
import Search from "../components/search";
import { Section } from "../components/section";
import { TrendingFoods } from "../components/trending";
import { Restaurants } from "../components/restaurants";

const StatusBarHeight = Constants.statusBarHeight;

export default function HomeScreen() {
  return (
    <ScrollView
      style={{ flex: 1 }}
      className="bg-slate-200"
      showsVerticalScrollIndicator={false}
    >
      <View className="w-full px-4" style={{ marginTop: StatusBarHeight + 8 }}>
        <Header />
        <Banner />
        <Search />
      </View>
      <Section 
      name="Comidas em Alta"
      label="Veja mais"
      action={() => console.log("clicou no veja mais")}
      size="text-2xl"
      />
      <TrendingFoods/>
      <Section 
      name="Famosos no DevFood"
      label="Veja todas"
      action={() => console.log("clicou no famosos")}
      size="text-xl"
      />
      <Restaurants/>
    </ScrollView>
  );
}
