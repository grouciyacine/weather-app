import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack'
import Home from './screens/Home';
import Menu from './screens/Menu';

export type RootNavigation={
  Home:any
  Details:any
  Menu:any
  Maps:any
}
const Stack=createNativeStackNavigator<RootNavigation>()
export default function App() {
  
  
  return (
<NavigationContainer>
  <Stack.Navigator>
<Stack.Screen options={{headerShown:false}} component={Home} name='Home'/>    
<Stack.Screen options={{headerShown:false}} component={Menu} name='Menu'/>
  </Stack.Navigator>

</NavigationContainer>


  );
}
//http://api.openweathermap.org/data/2.5/forecast?id=524901&appid=2966d9775a530f709ca1ab1b5010d00d