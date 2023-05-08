import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import {NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootNavigation } from '../App'
import { useNavigation } from '@react-navigation/native';
export type NavigationProp=NativeStackNavigationProp<RootNavigation,'Details'>;
type Props = {

}

const Day = (props: Props) => {
  const navi=useNavigation<NavigationProp>()
  return (
    <TouchableOpacity onPress={()=>{navi.navigate('Menu')}} className='mx-7 flex-col items-center'>
        <Image className='w-[100px] h-[100px] rounded-md' source={{uri:'https://thumbs.dreamstime.com/z/wheather-icons-8491874.jpg'}}/>
      <Text className='text-white text-lg'> Day 1</Text>
    </TouchableOpacity>
  )
}

export default Day

