// modules
import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'

// icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

// utils
import { width_container } from "../../utils/display"

/**
 * LoginScreen
 * * El inicio de sesion tiene un diseño que dificulta hacerlo responsive a todos los tamaños de dispositivos moviles,
 * * la cual algunos dispositivos seran afectados por el tamaño de el diseño maquetado en codigo
 * 
 * ! Recomiendo mejorar el diseño y plantear mejor el sistema de inicio de sesiones
 */

const LoginScreen = ({ navigation }: any) => {
    return (
        <SafeAreaView className="w-full h-full flex flex-col justify-center items-center">
            <Image
                source={require("../../assets/images/POTYBEAUTYDARK.png")}
                style={{
                    width: "100%",
                    height: "100%",
                    resizeMode: "repeat",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    opacity: 0.1
                }}
            />
            <Image
                source={require("../../assets/logo/android/drawable-hdpi/POTY.png")}
                style={{
                    width: "100%",
                    height: width_container * 0.6,
                    resizeMode: "contain",
                }}
            />
            <View
                className="flex justify-center items-center py-8 mt-4 bg-color-01 rounded-3xl shadow-md shadow-color-02"
                style={{
                    width: width_container * 1.1,
                }}
            >
                <Text className="text-color-02 text-xl">Iniciar sesión como</Text>
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                <View className="w-full flex justify-center items-center">
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginBusinessScreen')}
                        className="flex flex-row justify-between items-center w-3/4 h-12 bg-color-04 my-2 rounded-2xl px-8"
                    >
                        <FontAwesome5 name={"store"} size={22} color={"#F2F1F1"} />
                        <Text className="text-color-01 text-lg px-4">Empresa POTY</Text>
                        <Feather name={"scissors"} size={22} color={"#F2F1F1"} />
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('LoginPhoneScreen')}
                        className="flex flex-row justify-between items-center w-3/4 h-12 bg-color-04 my-2 rounded-2xl px-8"
                    >
                        <AntDesign name={"user"} size={25} color={"#F2F1F1"} />
                        <Text className="text-color-01 text-lg">Cliente POTY</Text>
                        <Entypo name={"water"} size={22} color={"#F2F1F1"} />
                    </TouchableOpacity>
                </View>
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    className="flex justify-center items-center w-2/3 h-12 bg-color-08 my-2 rounded-2xl"
                >
                    <Text className="text-color-01 text-lg">Regresar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

export default LoginScreen;