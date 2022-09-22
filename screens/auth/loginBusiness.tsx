// modules
import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView, Modal } from 'react-native'

// context
import { AuthContext } from '../../context/auth/auth';

// components
import FormInput from '../../components/form/formInput';

const LoginBusinessScreen = ({ navigation }: any) => {

    const width = Dimensions.get("window").width;
    const width_container = width * 0.8;

    // states
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const [recoverEmail, setrecoverEmail] = useState();

    // context simulation api
    const { login } = useContext(AuthContext);

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
                <Text className="text-color-02 text-2xl">Inicia Sesión</Text>
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                <View className="w-full">
                    <FormInput
                        labelValue={email}
                        onChangeText={(userEmail: any) => setEmail(userEmail)}
                        placeholderText="Correo Electronico"
                        iconType="user"
                        keyboardType="email-address"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormInput
                        labelValue={password}
                        onChangeText={(userPassword: any) => setPassword(userPassword)}
                        placeholderText="Contraseña"
                        iconType="lock"
                        secureTextEntry={true}
                    />
                </View>
                <TouchableOpacity className="my-4"
                    onPress={() => changeModalVisible(true)}
                >
                    <Text className="text-base font-bold text-color-04">¿Olvidaste tu contraseña?</Text>
                </TouchableOpacity>
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
                                    Ingresa tu correo
                                </Text>
                                <View className="w-full h-[2px] bg-color-08 my-5"></View>
                                <Text className="text-color-02 text-base font-bold text-center">
                                    Se enviaran los pasos para recuperar tu contraseña
                                </Text>

                                <FormInput
                                    labelValue={email}
                                    onChangeText={(recoverEmail: any) => setrecoverEmail(recoverEmail)}
                                    placeholderText="Correo Electronico"
                                    iconType="user"
                                    keyboardType="email-address"
                                    autoCapitalize="none"
                                    autoCorrect={false}
                                />

                                <TouchableOpacity className="my-4"
                                    onPress={() => changeModalVisible(false)}
                                >
                                    <Text className="text-base font-bold text-color-04 text-center">
                                        ¿No recibiste tu correo?
                                    </Text>
                                    <Text className="text-base font-bold text-color-04 text-center">
                                        Reenviar correo
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
                                            changeModalVisible(false)
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
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                <View className="w-full flex flex-row justify-center items-center">
                    <TouchableOpacity
                        onPress={() => navigation.goBack()}
                        className="flex justify-center items-center w-2/5 h-12 bg-color-08 my-2 mx-2 rounded-2xl"
                    >
                        <Text className="text-color-01 text-lg">Regresar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => login(email, password)}
                        className="flex justify-center items-center w-2/5 h-12 bg-color-04 my-2 mx-2 rounded-2xl"
                    >
                        <Text className="text-color-01 text-lg">Iniciar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default LoginBusinessScreen;