import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";
import { RestaurantsItem } from "./item";
export interface RestaurantsProps {
  id: string;
  name: string;
  image: string;
}
export default function RestaurantVerticalList() {
  const [restaurants, setRestaurants] = useState<RestaurantsProps[]>([]);
  useEffect(() => {
    async function getRestaurant() {
      const response = await fetch("http://192.168.2.56:3000/restaurants");
      const data = await response.json();
      console.log(data);
      setRestaurants(data);
    }
    getRestaurant();
  }, []);
  return (
    <View className="px-4 flex-1 w-full h-full mb-11 gap-4">
      {restaurants.map(item => (
        <RestaurantsItem item={item} key={item.id}/>
      ))}
    </View>
  );
}
