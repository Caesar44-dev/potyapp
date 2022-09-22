// modules
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView, Modal } from 'react-native'
import PhoneInput from "react-native-phone-input"

const RegisterClientScreen = ({ navigation }: any) => {

    const width = Dimensions.get("window").width;
    const width_container = width * 0.8;

    const [phoneNumber, setphoneNumber] = useState("");

    const [isModalVisible, setisModalVisible] = useState(false);

    const changeModalVisible = (bool: boolean) => {
        setisModalVisible(bool);
    }

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
                <Text className="text-color-02 text-2xl">Ingresa tu Telefono</Text>
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                <Text className="text-color-02 text-base pt-2 px-10 text-center font-bold">
                    Se enviara un MSM a tu número celular.
                </Text>
                <Text className="text-color-02 text-sm pt-2 pb-5 px-10 text-center font-bold">
                    Puede aplicarse las tarifas estandar para tu mensaje
                </Text>
                <View className="w-full flex flex-row justify-center items-center pb-4">
                    <View className="w-3/4 bg-color-05">
                        <PhoneInput
                            style={{
                                width: "100%",
                            }}
                            flagStyle={{
                                width: 40,
                                height: 40,
                            }}
                            textStyle={{
                                color: "#111"
                            }}
                            initialCountry={"mx"}
                            autoFormat={true}
                            initialValue={phoneNumber}
                            onChangePhoneNumber={(phoneNumber) => setphoneNumber(phoneNumber)}
                        />
                    </View>
                </View>
                <Modal
                    transparent={true}
                    animationType={"fade"}
                    visible={isModalVisible}
                    onRequestClose={() => changeModalVisible(false)}
                >
                    <TouchableOpacity
                        disabled={true}
                        className={"w-full h-full flex justify-center items-center bg-[#00000080]"}
                    >
                        <View
                            className="bg-color-01 flex justify-center items-center rounded-3xl"
                            style={{
                                width: width_container * 1,
                                height: width_container * 1.3,
                            }}>
                            <View className="w-full h-full px-4 py-2 flex justify-center items-center">
                                <Text className="text-color-02 text-xl font-bold text-center">
                                    Reenvia mi PIN
                                </Text>
                                <View className="w-full h-[2px] bg-color-08 my-5"></View>
                                <Text className="text-color-02 text-base font-bold text-center">
                                    Revisa que tu número este escrito correctamente
                                </Text>
                                <View
                                    className="w-full h-12 flex flex-row justify-center items-center rounded-md bg-[#d9dbe0] px-4 my-4"
                                >
                                    <Text>
                                        {phoneNumber}
                                    </Text>
                                </View>
                                <TouchableOpacity className="my-4"
                                    onPress={() => changeModalVisible(false)}
                                >
                                    <Text className="text-base font-bold text-color-04 text-center">
                                        ¿Tu numero esta incorrecto?
                                    </Text>
                                    <Text className="text-base font-bold text-color-04 text-center">
                                        Corrige tu numero celular
                                    </Text>
                                </TouchableOpacity>
                                <View className="w-full flex flex-row justify-center items-center">
                                    <TouchableOpacity
                                        onPress={() => changeModalVisible(false)}
                                        className="flex justify-center items-center w-2/5 h-12 bg-color-08 my-2 mx-2 rounded-2xl"
                                    >
                                        <Text className="text-color-01 text-lg">Regresar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => {
                                            if (phoneNumber.length >= 13 && phoneNumber.length >= 14) {
                                                navigation.navigate('LoginClientScreen')
                                            }
                                            else changeModalVisible(false)
                                        }}
                                        className="flex justify-center items-center w-2/5 h-12 bg-color-04 my-2 mx-2 rounded-2xl"
                                    >
                                        <Text className="text-color-01 text-lg">Iniciar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
                <View className="w-full flex flex-row justify-center items-center">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="flex justify-center items-center w-2/5 h-12 bg-color-08 my-2 mx-2 rounded-2xl"
                    >
                        <Text className="text-color-01 text-lg">Regresar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => changeModalVisible(true)}
                        className="flex justify-center items-center w-2/5 h-12 bg-color-04 my-2 mx-2 rounded-2xl"
                    >
                        <Text className="text-color-01 text-lg">Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterClientScreen;