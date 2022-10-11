// modules
import React from 'react'
import { View, Text, Image, SafeAreaView } from 'react-native'

// utils
import { width_container } from "../../utils/display"

/**
 * HomeScreen
 */

const HomeScreen = ({ navigation }: any) => {
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
                    height: width_container * 0.75,
                    resizeMode: "contain",
                }}
            />
            <View
                className="flex justify-center items-center py-8 mt-4 bg-color-01 rounded-3xl shadow-md shadow-color-02"
                style={{
                    width: width_container * 1.1,
                }}
            >
                <Text className="text-color-02 text-2xl"></Text>
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>

            </View>
        </SafeAreaView>
    );
};

export default HomeScreen;