import { View, Text } from "react-native";
import React, { useEffect, useState } from "react";

export function Restaurants() {
    const [restaurants, setRestaurants] = useState([])
  useEffect(() => {
    async function getFoods() {
      const response = await fetch("http://192.168.2.56:3000/foods");
      const data = await response.json();
      console.log(data);
      setRestaurants(data);
    }
    getFoods();
  }, []);
  return (
    <View>
      <Text>index</Text>
    </View>
  );
}
