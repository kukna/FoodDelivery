import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import TabsList from './TabsList';

const Tab = createMaterialTopTabNavigator();

const MyTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarScrollEnabled: true,
        tabBarStyle: {
          marginLeft: 50,
          backgroundColor: 'transparent',
          elevation: 0,
        },
        tabBarActiveTintColor: '#FA4A0C',
        tabBarInactiveTintColor: '#9A9A9D',
        tabBarIndicatorStyle: {backgroundColor: '#FA4A0C'},
      }}>
      <Tab.Screen name="Foods" component={TabsList} />
      <Tab.Screen name="Drinks" component={TabsList} />
      <Tab.Screen name="Snacks" component={TabsList} />
      <Tab.Screen name="Sauce" component={TabsList} />
    </Tab.Navigator>
  );
};

export default MyTabs;
