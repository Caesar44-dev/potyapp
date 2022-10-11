// modules
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, Modal, TextInput } from 'react-native'
import CountryPicker, { Country } from 'react-native-country-picker-modal'
import { PhoneNumberUtil } from "google-libphonenumber";

// utils
import { setWidth, setHeight, width_container } from "../../utils/display"

// configs
const phoneUtil = PhoneNumberUtil.getInstance();

/**
 * LoginPhone
 * 
 * ? Donde esta planteado que metodos y funciones tiene que tener el inicio de sesion con telefono.
 * 
 * ? Porque hay un inicio de sesion de clientes con numero de telefono, si en la documentacion hay un endpoint
 * ? que registra los usuarios con correo y contraseña?.
 * 
 * ? Si no hay un numero registrado este no puede iniciar sesion con telefono?
 * 
 * ! El diseño y el planteamiento de la api no tienen sentido, si no entiendo yo, menos lo entendera un usuario comun y corriente,
 * ! porfavor recomiendo un informe o analisis escrito o grafico de como funciona este sistema de inicio de sesion con numero de telefono.
 * 
 */

const LoginPhone = ({ navigation, ...props }: any) => {

    const [phoneNumber, setphoneNumber] = useState("");

    const [error, seterror] = useState(false)

    const [isModalVisible, setisModalVisible] = useState(false);
    const [isVisible, setisVisible] = useState(false)

    const [countryCode, setCountryCode] = useState<any>("MX")

    const [callingCode, setcallingCode] = useState("52")

    const onSelect = (country: Country) => {
        setCountryCode(country.cca2)
        setcallingCode(country.callingCode[0])
        console.log(country)
    }

    const validPhoneNumber = () => {
        const parsedNumber = phoneUtil.parse(phoneNumber, countryCode);
        if (phoneUtil.isValidNumber(parsedNumber)) {
            setisModalVisible(true)
            seterror(false)
            console.log("isValid")
        }
        else {
            console.log("error")
            seterror(true)
            setisModalVisible(false)
        }
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
                <Text className="text-color-02 text-xl">Ingresa tu Telefono</Text>
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                <Text className="text-color-02 text-base pt-2 px-10 text-center font-bold">
                    Se enviara un MSM a tu número celular.
                </Text>
                <Text className="text-color-02 text-sm pt-2 pb-5 px-10 text-center font-bold">
                    Puede aplicarse las tarifas estandar para tu mensaje
                </Text>
                <View className="w-full flex flex-row justify-center items-center pb-2">
                    <View className="w-full flex flex-row justify-center items-center bg-color-01 border-[1.5px] border-color-07 rounded-3xl"
                        style={{
                            width: setWidth(75),
                        }}
                    >
                        <CountryPicker
                            onSelect={onSelect}
                            withEmoji
                            withFilter
                            withFlag
                            countryCode={countryCode}
                            withCallingCode
                            visible={isVisible}
                            onClose={() => setisVisible(false)}
                            translation={"spa"}
                            region={"Americas"}
                            theme={{
                                filterPlaceholderTextColor: "#999",
                            }}
                            containerButtonStyle={{
                                width: 30
                            }}
                            modalProps={{
                                animationType: "fade"
                            }}
                            filterProps={{
                                placeholder: "Buscar",
                                style: {
                                    borderBottomColor: "#111",
                                    width: "100%",
                                    height: 70,
                                },
                            }}
                            flatListProps={{
                                contentContainerStyle: {
                                    paddingHorizontal: 10,
                                },
                            }}
                            {...props}
                        />
                        <View
                            className="flex justify-center items-center"
                            style={{
                                width: setWidth(15),
                                height: setHeight(6),
                            }}
                        >
                            <Text className="text-color-02 text-base">{`+${callingCode}`}</Text>
                        </View>
                        <TextInput
                            className="text-color-02 text-base flex justify-center items-center ml-1"
                            style={{
                                width: setWidth(45),
                                height: setHeight(6),
                            }}
                            placeholder="Ingresa tu numero"
                            placeholderTextColor={"#999"}
                            selectionColor={"#111"}
                            keyboardType="number-pad"
                            onChangeText={
                                (text) => {
                                    setphoneNumber(`+${callingCode}${text}`)
                                    // console.log(`+${callingCode}${text}`)
                                }
                            }
                        />
                    </View>
                </View>
                <Modal
                    transparent={true}
                    animationType={"fade"}
                    visible={isModalVisible}
                    onRequestClose={() => setisModalVisible(false)}
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
                                    onPress={() => setisModalVisible(false)}
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
                                        onPress={() => setisModalVisible(false)}
                                        className="flex justify-center items-center w-2/5 h-12 bg-color-08 my-2 mx-2 rounded-2xl"
                                    >
                                        <Text className="text-color-01 text-lg">Regresar</Text>
                                    </TouchableOpacity>
                                    <TouchableOpacity
                                        onPress={() => navigation.navigate("ValidatePhoneNumberScreen")}
                                        className="flex justify-center items-center w-2/5 h-12 bg-color-04 my-2 mx-2 rounded-2xl"
                                    >
                                        <Text className="text-color-01 text-lg">Iniciar</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </TouchableOpacity>
                </Modal>
                {error && (
                    <View className="py-2">
                        <Text className="text-sm font-bold text-[#ff2334]">
                            Porfavor ingrese un numero valido
                        </Text>
                    </View>
                )}
                <View className="w-full flex flex-row justify-center items-center">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="flex justify-center items-center w-2/5 h-12 bg-color-08 my-2 mx-2 rounded-2xl"
                    >
                        <Text className="text-color-01 text-lg">Regresar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={validPhoneNumber}
                        className="flex justify-center items-center w-2/5 h-12 bg-color-04 my-2 mx-2 rounded-2xl"
                    >
                        <Text className="text-color-01 text-lg">Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginPhone;