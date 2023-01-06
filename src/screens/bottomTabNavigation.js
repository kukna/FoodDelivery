import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import Feather from 'react-native-vector-icons/Feather';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import CommingSoon from './CommingSoon';
import HomeScreen from './HomeScreen';

const Tab = createMaterialBottomTabNavigator();

const BottomTab=()=> {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#FA4A0C"
      inactiveColor='#ADADAF'
      barStyle={{ backgroundColor: '#F2F2F2' }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
            tabBarLabel:'',
          tabBarIcon: ({ color }) => (
            <Entypo name="home" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Favourite"
        component={CommingSoon}
        options={{
          tabBarLabel:'',
          tabBarIcon: ({ color }) => (
            <Entypo name="heart" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="Profile"
        component={CommingSoon}
        options={{
            tabBarLabel:'',
          tabBarIcon: ({ color }) => (
            <Feather name="user" color={color} size={26} />
          ),
        }}
      />
       <Tab.Screen
        name="History"
        component={CommingSoon}
        options={{
          tabBarLabel: '',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="history" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default BottomTab;