import { View, Text,ScrollView,ImageBackground, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Button, Icon } from '@rneui/base'
import axios from 'axios'
import { AntDesign,Entypo,SimpleLineIcons,FontAwesome} from '@expo/vector-icons'
import { Input } from '@rneui/themed'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootNavigation } from '../App'
type Props = {}

const Menu = (props: Props) => {
    const[week,setWeek]=useState<any>([])
    const [today,setToday]=useState<any>([])
    const [input,setInput]=useState<string>('')
    useEffect(()=>{
            axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=${input}&units=metric&appid=2966d9775a530f709ca1ab1b5010d00d`)
            .then((res)=>setWeek(res.data.list))
            .catch((e)=>console.log(e))
    },[input])
    useEffect(()=>{
        const getdata=async()=>{
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${input}&exclude=current&units=metric&appid=2966d9775a530f709ca1ab1b5010d00d`)
        .then((res)=>setToday(res.data))
        .catch((e)=>console.log(e))
        }
        getdata()
},[input])
const navigate=useNavigation()
return (
    <ScrollView className='flex-1 w-full h-full bg-[#e3e0ec]'>
                <View className='pt-5 flex flex-row items-center '>
                    <TouchableOpacity>
                        <AntDesign className='mt-2 '  name='search1' size={26} /> 
                    </TouchableOpacity>
        <Input  placeholder='Enter City Name 🏙️' value={input} onChangeText={(txt)=>setInput(txt)}/>
        
                </View>
<View className='text-center flex pt-[30px] flex-col'>
    <Text className='text-center text-3xl pt-2'>{today?.name},<Text className='text-xl '>{today?.sys?.country} </Text></Text>
    <Text className='text-center text-7xl'>{today?.main?.temp}C</Text>
    {today?.weather?.map((we:any,i:any)=>(
        <View key={i} className='flex flex-row justify-center items-center'>
            <Text className='text-sm text-center'>{we.main}</Text>
            <Image source={{uri:`https://openweathermap.org/img/wn/${we.icon}@2x.png`}} className='w-[40px] h-[40px]'/>
            </View> 
    ))}
    <Text className='text-center'>Lat:{today?.coord?.lat} Lon:{today?.coord?.lon}</Text>
</View>
<View className='bg-[#92bad2] w-[96%] h-[120px] ml-2 mt-6 rounded-md '>
<Text className='text-center border-gray-300  border-b-4'>Weather Expected for Today</Text>
<ScrollView horizontal={true} className='space-x-3' showsHorizontalScrollIndicator={false} >
    {
    week?.map((we:any,i:any)=>(
        <View key={i} className='border-gray-300 border-l-2'>
                <Text className='ml-2'>{we.dt_txt}</Text>
                {we.weather.map((we:any,i:any)=>(
                    <Image key={i} source={{uri:`https://openweathermap.org/img/wn/${we.icon}@2x.png`}} className="w-[60px] h-[60px] ml-8"/>
                ))}
<Text className='ml-11  '>{we.main.temp}</Text>
        </View>
    ))
}
</ScrollView>
</View>

<View className='bg-[#92bad2] w-[96%] h-[300px] ml-2 mt-6 rounded-md flex-1'>
    <Text className='text-center border-gray-300 border-b-4'>Weather For Week</Text>
<ScrollView>
     {week?.map((we:any,i:any)=>(
        <View key={i} className='border-gray-300 border-b-2'>
            <View className='flex flex-row justify-between items-center px-2'>
            <Text className='text-xs'>Day:</Text>
    <View className='pt-2'>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/728/728093.png'}} className='w-[40px] h-[40px]'/>
        <Text className='text-center'>{we.main.humidity}</Text>
    </View>
    <View className='pt-2'>
        <Image source={{uri:'https://freesvg.org/img/1412206082.png'}} className='w-[40px] h-[40px]'/>
        <Text>{we.main.temp}</Text>
    </View>
    <View className='pt-2'>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/173/173568.png'}} className='w-[40px] h-[40px]'/>
        <Text>{we.main.pressure}</Text>
    </View>
    <View className='pt-2'>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/7366/7366595.png'}} className='w-[40px] h-[40px]'/>
        <Text>{we.main.sea_level}</Text>
    </View>
    <View className='pt-2'>
        <Image source={{uri:'https://cdn-icons-png.flaticon.com/512/1504/1504039.png'}} className='w-[40px] h-[40px]'/>
        <Text>{we.main.grnd_level}</Text>
    </View>
</View>
        </View>
    ))}

</ScrollView>
</View>
<View className='bg-[#92bad2] w-full h-[60px]  mt-6 rounded-md flex flex-1 flex-row justify-between p-4'>
<TouchableOpacity>
<Entypo name='map' size={30}   />
</TouchableOpacity>
<TouchableOpacity>
<SimpleLineIcons name='cursor' size={30}/>
</TouchableOpacity>
<FontAwesome name='circle' size={10}/>
<FontAwesome name='circle' size={10}/>
<FontAwesome name='circle' size={10}/>
<FontAwesome name='circle' size={10}/>
<TouchableOpacity>
    <Entypo name='menu' size={30}/>
</TouchableOpacity>
</View>
</ScrollView>
)
}

export default Menu