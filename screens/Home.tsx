import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootNavigation } from "../App";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

type Props = {};
export type NavigationProp = NativeStackNavigationProp<RootNavigation, "Home">;
const Home = (props: Props) => {
const navigation = useNavigation<NavigationProp>();
setTimeout(()=>{
navigation.navigate('Menu')
},3400)
    return (
    <SafeAreaView className="bg-[#1d2b64] flex-1 flex-row justify-center items-center">
        <Image className="w-[700px] h-[700px]" source={require('../assets/we.png')}/>
    </SafeAreaView>
    );
};

export default Home;
