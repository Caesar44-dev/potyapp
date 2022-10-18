// modules
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// views

// icons
import Foundation from 'react-native-vector-icons/Foundation';
import Entypo from 'react-native-vector-icons/Entypo';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import BusinessMainVerificationNav from '../../screens/businessMain/businessMainScreen';
import BusinessMainScreenScheduleOpenViewAppointment from '../../screens/businessMain/businessMainScreenScheduleOpenViewAppointment';
import BusinessMainScreenHistory from '../../screens/businessMain/businessMainScreenHistory';

// configs
const Tab = createBottomTabNavigator();

const NavTabs = () => {
    return (
        <Tab.Navigator
            initialRouteName="Home"
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    position: 'absolute',
                    height: 70,
                },
                tabBarActiveTintColor: '#CD5A9C',
                tabBarInactiveTintColor: '#999',
            })}
        >
            <Tab.Screen
                name="Home"
                component={BusinessMainVerificationNav}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Foundation name={"home"} size={35} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Screen2"
                component={BusinessMainScreenScheduleOpenViewAppointment}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <AntDesign name={"calendar"} size={35} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Screen3"
                component={BusinessMainVerificationNav}
                options={{
                    tabBarIconStyle: {
                        position: "absolute",
                        top: -30,
                        borderRadius: 55,
                        width: 70,
                        height: 70,
                        backgroundColor: "#CD5A9C"
                    },
                    tabBarIcon: ({ color }) => {
                        return <MaterialIcons name={"add"} size={50} color={"#fff"} />;
                    }
                }}
            />
            <Tab.Screen
                name="Screen4"
                component={BusinessMainVerificationNav}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <FontAwesome5 name={"money-check"} size={30} color={color} />;
                    }
                }}
            />
            <Tab.Screen
                name="Screen5"
                component={BusinessMainScreenHistory}
                options={{
                    tabBarIcon: ({ color }) => {
                        return <Entypo name={"back-in-time"} size={35} color={color} />;
                    }
                }}
            />
        </Tab.Navigator>
    )
}

export default NavTabs;