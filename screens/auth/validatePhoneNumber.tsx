// modules
import React from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView } from 'react-native'

// icons
import FormInputPhoneOTP from '../../components/form/formInputPhoneOTP';

// utils
import { width_container } from "../../utils/display"

/**
 * ValidatePhoneNumberScreen
 * 
 */

const ValidatePhoneNumberScreen = ({ navigation }: any) => {
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
                <Text className="text-color-02 text-xl">Confirma tu número</Text>
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                <Text className="text-color-02 text-base pt-2 pb-5 px-10 text-center font-bold">Revisa el PIN enviado a tu número celular y digitalo aquí</Text>
                <FormInputPhoneOTP />
                <TouchableOpacity className="my-4"
                // onPress={() => navigation.navigate('')}
                >
                    <Text className="text-base font-bold text-color-04">¿No recibiste tu PIN?</Text>
                </TouchableOpacity>
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

export default ValidatePhoneNumberScreen;