import { View, Text, Pressable } from 'react-native'
import { Ionicons, Feather} from '@expo/vector-icons'
import React from 'react'

export default function Header() {
  return (
    <View className='w-full flex flex-row items-center justify-between'>
      <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
        <Ionicons name='menu' size={20} color="#121212"/>
      </Pressable>
        <View className='flex-col items-center justify-center'>
            <Text className='text-center text-sm text-slate-800'> Localização </Text>
            <View className='flex flex-row items-center justify-center gap-1'>
                <Feather name="map-pin" size={14} color="#FF0000"/>
                <Text className='text-lg font-bold' >Boa Viagem</Text>
            </View>
        </View>

      <Pressable className='w-10 h-10 bg-white rounded-full flex justify-center items-center'>
        <Feather name='bell' size={20} color="#121212"/>
      </Pressable>
    </View>
  )
}