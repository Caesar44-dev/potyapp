// modules
import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { LinearGradient } from 'expo-linear-gradient';

// Screens
import LoginClientScreen from '../auth/loginClient';
import LoginScreen from '../auth/login';
import RegisterScreen from '../auth/register';
import LoginBusinessScreen from '../auth/loginBusiness';
import RegisterClientScreen from '../auth/registerClient';
import RegisterClientFormScreen from '../auth/registerClientForm';
import RegisterBusinessFormInfo from '../auth/registerBusinessFormInfo';
import RegisterBusinessFormOwner from '../auth/registerBusinessFormOwner';
import RegisterBusinessFormMap from '../auth/registerBusinessFormMap';

// configs
const Stack = createNativeStackNavigator()

const WelcomeScreen = ({ navigation }: any) => {

    const width = Dimensions.get("window").width;
    const width_container = width * 0.8;

    return (
        <SafeAreaView>
            <LinearGradient
                className="w-full h-full flex flex-col justify-center items-center"
                colors={["#FFFFFF", "#D786B6", "#CE5B9D"]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0.5, 0.8, 1]}
            >
                <Image
                    source={require("../../assets/images/POTYBEAUTYDARK.png")}
                    style={{
                        width: "100%",
                        height: "100%",
                        resizeMode: "repeat",
                        position: "absolute",
                        top: 0,
                        left: 0,
                        opacity: 0.2
                    }}
                />
                <Image
                    source={require("../../assets/logo/android/drawable-hdpi/POTY.png")}
                    style={{
                        width: "100%",
                        height: width_container * 0.75,
                        resizeMode: "contain",
                    }}
                />
                <View className="w-full flex justify-center items-center">
                    <View className="w-full p-10 flex justify-center items-center">
                        <Text className="text-color-02 text-5xl text-start">Bienvenido</Text>
                        <Text className="text-color-02 text-xl text-center pt-4">Poty, Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos, sunt.</Text>
                    </View>
                    <TouchableOpacity className="my-2"
                        onPress={() => navigation.navigate('LoginScreen')}
                    >
                        <Text className="text-base font-bold text-color-02">¿Ya eres parte?</Text>
                    </TouchableOpacity>
                    <View className="w-11/12 h-[2px] bg-color-01 my-5"></View>
                    <View className="w-full flex justify-center items-center">
                        <TouchableOpacity
                            onPress={() => navigation.navigate('RegisterScreen')}
                            className="flex justify-center items-center w-2/3 h-12 bg-color-01 my-4 rounded-2xl"
                        >
                            <Text className="text-color-02 text-lg">Registrarse</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('LoginScreen')}
                            className="flex justify-center items-center w-2/3 h-12 bg-color-01 my-2 rounded-2xl"
                        >
                            <Text className="text-color-02 text-lg">Ingresa</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </LinearGradient>
        </SafeAreaView>
    )
}

const WelcomeNav = () => {
    return (
        <Stack.Navigator initialRouteName="Welcome" screenOptions={{
            headerShown: false
        }}>
            {/* welcome */}
            <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />

            {/* logins */}
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="LoginClientScreen" component={LoginClientScreen} />
            <Stack.Screen name="LoginBusinessScreen" component={LoginBusinessScreen} />

            {/* registers */}
            {/* client */}
            <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
            <Stack.Screen name="RegisterClientScreen" component={RegisterClientScreen} />
            <Stack.Screen name="RegisterClientFormScreen" component={RegisterClientFormScreen} />

            {/* business */}
            <Stack.Screen name="RegisterBusinessFormInfo" component={RegisterBusinessFormInfo} />
            <Stack.Screen name="RegisterBusinessFormMap" component={RegisterBusinessFormMap} />
            <Stack.Screen name="RegisterBusinessFormOwner" component={RegisterBusinessFormOwner} />

        </Stack.Navigator>
    )
}

export default WelcomeNav;