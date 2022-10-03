// modules
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'
import MapView, { Marker } from 'react-native-maps';

// utils
import { width_container } from "../../utils/display"

const RegisterBusinessFormInfo = ({ navigation }: any) => {

    // example country
    const [origin, setorigin] = useState({
        latitude: 24.178752810257958,
        longitude: -102.7257445529046
    })

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
            <View
                className="flex justify-center items-center py-8 mt-4 bg-color-01 rounded-3xl shadow-md shadow-color-02"
                style={{
                    width: width_container * 1.1,
                }}
            >
                <Text className="text-color-02 text-2xl">POTY Empresa</Text>
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                <Text className="text-color-02 text-lg pb-4">Confirme su ubicacion de empresa</Text>
                <View className="w-full px-8">
                    <MapView
                        style={{
                            width: "100%",
                            height: width_container * 1,
                            padding: 10
                        }}
                        initialRegion={{
                            latitude: origin.latitude,
                            longitude: origin.longitude,
                            latitudeDelta: 8,
                            longitudeDelta: 8,
                        }}
                    >
                        <Marker
                            draggable={true}
                            onDragEnd={(direction) => setorigin(direction.nativeEvent.coordinate)}
                            coordinate={origin}
                        />
                    </MapView>
                </View>
                <View className="w-full px-10 pt-6 flex flex-row justify-center items-center">
                    <View className="w-8 h-8 border-2 border-color-08 rounded-full flex justify-center items-center">
                        <Text className="text-color-09 text-lg">
                            1
                        </Text>
                    </View>
                    <View className="w-14 h-[2px] bg-color-08 my-5 mx-1 justify-center">
                        <View className="w-2 h-2 bg-color-08 rounded-full"></View>
                    </View>
                    <View className="w-12 h-12 border-2 border-color-08 rounded-full flex justify-center items-center">
                        <Text className="text-color-09 text-lg">
                            2
                        </Text>
                    </View>
                    <View className="w-14 h-[2px] bg-color-08 my-5 mx-1 justify-center">
                        <View className="w-2 h-2 bg-color-08 rounded-full"></View>
                    </View>
                    <View className="w-8 h-8 border-2 border-color-08 rounded-full flex justify-center items-center">
                        <Text className="text-color-09 text-lg">
                            3
                        </Text>
                    </View>
                </View>
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                <View className="w-full flex flex-row justify-center items-center">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="flex justify-center items-center w-2/5 h-12 bg-color-08 my-2 mx-2 rounded-2xl"
                    >
                        <Text className="text-color-01 text-lg">Regresar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => navigation.navigate('RegisterBusinessFormOwner')}
                        className="flex justify-center items-center w-2/5 h-12 bg-color-04 my-2 mx-2 rounded-2xl"
                    >
                        <Text className="text-color-01 text-lg">Siguiente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterBusinessFormInfo;