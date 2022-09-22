// modules
import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'

// context
import { AuthContext } from '../../context/auth/auth';

// components
import FormInput from '../../components/form/formInput';

const RegisterClientFormScreen = ({ navigation }: any) => {

    const width = Dimensions.get("window").width;
    const width_container = width * 0.8;

    const [name, setname] = useState();
    const [phoneNumber, setphoneNumber] = useState();
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setconfirmPassword] = useState();

    // api simulation
    const { login } = useContext(AuthContext);

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
                <Text className="text-color-02 text-2xl">Registro Cliente</Text>
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                <View className="w-full">
                    <FormInput
                        labelValue={name}
                        onChangeText={(name: any) => setname(name)}
                        placeholderText="Nombre de la empresa"
                        iconType="home"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormInput
                        labelValue={phoneNumber}
                        onChangeText={(phoneNumber: any) => setphoneNumber(phoneNumber)}
                        placeholderText="Numero de telefono"
                        iconType="phone"
                        keyboardType="numeric"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
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
                        labelValue={confirmPassword}
                        onChangeText={(confirmPassword: any) => setconfirmPassword(confirmPassword)}
                        placeholderText="Contraseña"
                        iconType="lock"
                        secureTextEntry={true}
                    />
                    <FormInput
                        labelValue={password}
                        onChangeText={(userPassword: any) => setPassword(userPassword)}
                        placeholderText="Contraseña"
                        iconType="lock"
                        secureTextEntry={true}
                    />
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
                        onPress={() => login(email, password)}
                        className="flex justify-center items-center w-2/5 h-12 bg-color-04 my-2 mx-2 rounded-2xl"
                    >
                        <Text className="text-color-01 text-lg">Registrar</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterClientFormScreen;