// modules
import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native'

// components
import FormInput from '../../components/form/formInput';

// context
import { AuthContext } from '../../context/auth/auth';

// utils
import { width_container } from "../../utils/display"

const RegisterBusinessFormInfo = ({ navigation }: any) => {

    // api simulation
    const [nameOwner, setnameOwner] = useState("");
    const [dniOwner, setdniOwner] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    // validation
    const [errors, seterrors] = useState<any>({});

    // context simulation api
    const { login } = useContext(AuthContext);

    const validate = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!nameOwner) {
            handleError('Campo requerido', 'nameOwner');
            isValid = false;
        }

        if (!dniOwner) {
            handleError('Campo requerido', 'dniOwner');
            isValid = false;
        }

        if (!phoneNumber) {
            handleError('Campo requerido', 'phoneNumber');
            isValid = false;
        }

        if (!email) {
            handleError('Campo requerido', 'email');
            isValid = false;

        } else if (!email.match(/\S+@\S+\.\S+/)) {
            handleError('Campo invalido', 'email');
            isValid = false;
        }

        if (!password) {
            handleError('Campo requerido', 'password');
            isValid = false;

        } else if (password.length < 5) {
            handleError('Longitud mínima de la contraseña de 5', 'password');
            isValid = false;
        }

        if (isValid) {
            login();
            navigation.navigate('HomeScreen');
        }
    };

    const handleError = (error: any, input: any) => {
        seterrors((prevState: any) => ({ ...prevState, [input]: error }));
    };

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
                <View className="w-full flex justify-center items-center">
                    <FormInput
                        labelValue={nameOwner}
                        placeholderText="Nombre responsable"
                        iconName="user"
                        error={errors.nameOwner}
                        onChangeText={(nameOwner: any) => setnameOwner(nameOwner)}
                        onFocus={() => handleError(null, 'nameOwner')}
                    />
                    <FormInput
                        labelValue={dniOwner}
                        placeholderText="DNI responsable"
                        iconName="idcard"
                        error={errors.dniOwner}
                        onChangeText={(dniOwner: any) => setdniOwner(dniOwner)}
                        onFocus={() => handleError(null, 'dniOwner')}
                    />
                    <FormInput
                        labelValue={phoneNumber}
                        placeholderText="Telefono"
                        iconName="phone"
                        error={errors.phoneNumber}
                        onChangeText={(phoneNumber: any) => setphoneNumber(phoneNumber)}
                        onFocus={() => handleError(null, 'phoneNumber')}
                        keyboardType={"numeric"}
                    />
                    <FormInput
                        labelValue={email}
                        placeholderText="Correo electronico"
                        iconName="mail"
                        error={errors.email}
                        onChangeText={(email: any) => setemail(email)}
                        onFocus={() => handleError(null, 'email')}
                    />
                    <FormInput
                        labelValue={password}
                        placeholderText="Contraseña"
                        iconName="lock"
                        secureTextEntry={true}
                        error={errors.password}
                        onChangeText={(password: any) => setpassword(password)}
                        onFocus={() => handleError(null, 'password')}
                    />
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
                    <View className="w-8 h-8 border-2 border-color-08 rounded-full flex justify-center items-center">
                        <Text className="text-color-09 text-lg">
                            2
                        </Text>
                    </View>
                    <View className="w-14 h-[2px] bg-color-08 my-5 mx-1 justify-center">
                        <View className="w-2 h-2 bg-color-08 rounded-full"></View>
                    </View>
                    <View className="w-12 h-12 border-2 border-color-08 rounded-full flex justify-center items-center">
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
                        onPress={validate}
                        // onPress={() => navigation.navigate('RegisterBusinessFormMap')}
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