// modules
import React, { useContext, useEffect, useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native'

// components
import FormInput from '../../components/form/formInput';

// context
import { AuthContext } from '../../context/auth/auth';

// utils
import { width_container } from "../../utils/display"

/**
 * LoginPhone
 * 
 * ! No encuentro el sentido a algunos endpoints, porfavor hacer una mejor documentacion
 * ! acerca de la confirmacion de las cuentas
 * 
 * ! Algunos endpoints no funcionan como normalmente tienen que funcionar
 * 
 * ? Donde me indica que funcion debo programar para ingresar los parametros de confirmar numero de telefono
 * ? y el rol??. porque hay un parametro de role si el endpoint indica que el que se registra es un cliente??.
 * 
 * ? Porque hay un registro con estos datos, si tengo entendido que el inicio de sesion con telefono es suficiente
 * ? como para hacer un registro de clientes con correo y contraseña.
 * 
 * ! porfavor mejorar la documentacion y replantear el registro y confirmacion de usuarios clientes y empresas.
 * 
 */

const RegisterClientFormScreen = ({ navigation }: any) => {

    const [name, setname] = useState("");
    const [phoneNumber, setphoneNumber] = useState("");
    const [phoneNumberConfirmed, setphoneNumberConfirmed] = useState(true);
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [confirmPassword, setconfirmPassword] = useState("");
    const [role, setrole] = useState("cliente");

    // validation
    const [errors, seterrors] = useState<any>({});

    // context api
    const { registerCliente } = useContext(AuthContext);

    const validate = async () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!name) {
            handleError('Campo requerido', 'name');
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

        if (password != confirmPassword) {
            handleError('la contraseña no coincide', 'confirmPassword');
            isValid = false;
        }

        if (isValid) {
            await registerCliente(
                name,
                phoneNumber,
                phoneNumberConfirmed,
                email,
                password,
                confirmPassword,
                role
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
                <Text className="text-color-02 text-2xl">Registrarse</Text>
                <View className="w-11/12 h-[2px] bg-color-08 my-5"></View>
                <View className="w-full flex justify-center items-center">

                    <FormInput
                        labelValue={email}
                        placeholderText="Correo electronico"
                        iconName="mail"
                        error={errors.email}
                        onChangeText={(email: any) => setemail(email)}
                        onFocus={() => handleError(null, 'email')}
                    />

                    <FormInput
                        labelValue={name}
                        placeholderText="Nombre"
                        iconName="user"
                        error={errors.name}
                        onChangeText={(name: any) => setname(name)}
                        onFocus={() => handleError(null, 'name')}
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
                        labelValue={password}
                        placeholderText="Contraseña"
                        iconName="lock"
                        secureTextEntry={true}
                        error={errors.password}
                        onChangeText={(password: any) => setpassword(password)}
                        onFocus={() => handleError(null, 'password')}
                    />

                    <FormInput
                        labelValue={confirmPassword}
                        placeholderText="Confirmar Contraseña"
                        iconName="lock"
                        secureTextEntry={true}
                        error={errors.confirmPassword}
                        onChangeText={(confirmPassword: any) => setconfirmPassword(confirmPassword)}
                        onFocus={() => handleError(null, 'confirmPassword')}
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

export default RegisterClientFormScreen;