// modules
import React from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

// icons
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

const RegisterScreen = ({ navigation }: any) => {

    const width = Dimensions.get("window").width;
    const width_container = width * 0.8;

    return (
        <SafeAreaView>
            <LinearGradient
                className="w-full h-full flex flex-col justify-start items-center"
                colors={["#CE5B9D", "#D786B6", "#FFFFFF"]}
                start={{ x: 0.5, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                locations={[0, 0.3, 1]}
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
                <View className="flex flex-row justify-center items-center px-4 py-10">
                    <Image
                        source={require("../../assets/logo/android/drawable-hdpi/POTY.png")}
                        className={"w-1/2"}
                        style={{
                            height: width_container * 0.7,
                            resizeMode: "contain",
                        }}
                    />
                    <View className="w-1/2">
                        <Text className="text-3xl text-color-01 font-bold text-center pb-2">
                            ¡Bienvenido a POTY!
                        </Text>
                        <Text className="text-base text-color-01 font-bold text-center">
                            Encuentra u ofrece todo lo relacionado a belleza
                        </Text>
                    </View>
                </View>
                <View
                    className="flex justify-center items-center py-8 mt-4 bg-color-01 rounded-3xl shadow-md shadow-color-02"
                    style={{
                        width: width_container * 1.1,
                    }}
                >
                    <Text className="text-color-02 text-2xl">Deseas unirte como</Text>
                    <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                    <View className="w-full flex justify-center items-center">
                        <TouchableOpacity
                            onPress={() => navigation.navigate('RegisterBusinessFormInfo')}
                            className="flex flex-row justify-between items-center w-3/4 h-12 bg-color-04 my-2 rounded-2xl px-8"
                        >
                            <FontAwesome5 name={"store"} size={22} color={"#F2F1F1"} />
                            <Text className="text-color-01 text-lg px-4">Empresa POTY</Text>
                            <Feather name={"scissors"} size={22} color={"#F2F1F1"} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate('RegisterClientScreen')}
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
            </LinearGradient>
        </SafeAreaView>
    );
};

export default RegisterScreen;