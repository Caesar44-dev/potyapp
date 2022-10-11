// modules
import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native'

// components
import FormInput from '../../components/form/formInput';

// context
import { AuthContext } from '../../context/auth/auth';

// utils
import { width_container } from "../../utils/display"

/**
 * RegisterBusinessFormOwnerScreen
 *
 */

const RegisterBusinessFormOwnerScreen = ({ route, navigation }: any) => {

    const {
        companyName,
        specialization,
        addressCompany,
        state,
        city,
        origin
    } = route.params;

    const [nameOwner, setnameOwner] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [email, setemail] = useState("");

    // validation
    const [errors, seterrors] = useState<any>({});

    // context api
    const { register } = useContext(AuthContext);

    const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!nameOwner) {
            handleError('Campo requerido', 'nameOwner');
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

        if (isValid) {
            await register(
                companyName,
                specialization,
                nameOwner,
                email,
                phoneNumber,
                state,
                city,
                addressCompany,
                origin.latitude,
                origin.longitude,
            )
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
                        className="flex justify-center items-center w-2/5 h-12 bg-color-04 my-2 mx-2 rounded-2xl"
                    >
                        <Text className="text-color-01 text-lg">Siguiente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterBusinessFormOwnerScreen;