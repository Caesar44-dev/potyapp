// modules
import { Picker } from '@react-native-picker/picker';
import React, { useContext, useState } from 'react'
import { View, Text, Image, TouchableOpacity, SafeAreaView, Keyboard } from 'react-native'
// import { PhoneNumberUtil } from "google-libphonenumber";

// components
import FormInput from '../../components/form/formInput';
import FormSelect from '../../components/form/formSelect';

// context
import { AuthContext } from '../../context/auth/auth';

// utils
import { width_container } from "../../utils/display"


/**
 * RegisterBusinessFormInfoScreen
 * 
 * ? En los formularios de seleccion, se llaman endpoints? que debo llamar para mostrar los diferentes datos de ubicacion?
 * ? o si no, que datos debo colocar?
 * 
 */

const RegisterBusinessFormInfoScreen = ({ navigation }: any) => {

    // api simulation
    const [companyName, setcompanyName] = useState("");
    const [specialization, setspecialization] = useState(0);
    const [addressCompany, setaddressCompany] = useState("");
    const [state, setstate] = useState("");
    const [city, setcity] = useState("");

    // validation
    const [errors, seterrors] = useState<any>({});

    const validated = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!companyName) {
            handleError('Campo requerido', 'companyName');
            isValid = false;
        }

        if (!specialization) {
            handleError('Campo requerido', 'specialization');
            isValid = false;
        }

        if (!addressCompany) {
            handleError('Campo requerido', 'addressCompany');
            isValid = false;
        }

        if (!state) {
            handleError('Campo requerido', 'state');
            isValid = false;
        }

        if (!city) {
            handleError('Campo requerido', 'city');
            isValid = false;
        }

        // if (!inputs.email) {
        //     handleError('Porfavor ingrese un correo', 'email');
        //     isValid = false;

        // } else if (!inputs.email.match(/\S+@\S+\.\S+/)) {
        //     handleError('Porfavor ingrese un correo valido', 'email');
        //     isValid = false;
        // }

        // if (!inputs.password) {
        //     handleError('Please input password', 'password');
        //     isValid = false;

        // } else if (inputs.password.length < 5) {
        //     handleError('Min password length of 5', 'password');
        //     isValid = false;
        // }

        // const parsedNumber = phoneUtil.parse(phoneNumber, "MX");
        // if (phoneUtil.isValidNumber(parsedNumber)) {
        //     handleError('Campo requerido', 'phoneNumber');
        //     isValid = false;
        // }

        // if (!phoneNumber) {
        //     handleError('Campo requerido', 'phoneNumber');
        //     isValid = false;
        // }

        if (isValid) {
            navigation.navigate("RegisterBusinessFormMapScreen", {
                companyName,
                specialization,
                addressCompany,
                state,
                city
            });
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
                        labelValue={companyName}
                        placeholderText="Nombre de la empresa"
                        iconName="home"
                        error={errors.companyName}
                        onChangeText={(companyName: any) => setcompanyName(companyName.toUpperCase())}
                        onFocus={() => handleError(null, 'companyName')}
                    />
                    <FormSelect
                        selectedValue={specialization}
                        error={errors.specialization}
                        onValueChange={(itemValue: any) => setspecialization(itemValue)}
                        onFocus={() => handleError(null, 'specialization')}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label={"Rubro de Especialización"} value={null} enabled={false} />
                        <Picker.Item style={{ fontSize: 14 }} label={"Barberia"} value={"1"} enabled={true} />
                        <Picker.Item style={{ fontSize: 14 }} label={"specialization 2"} value={"2"} enabled={true} />
                        <Picker.Item style={{ fontSize: 14 }} label={"specialization 3"} value={"3"} enabled={true} />
                    </FormSelect>
                    <FormInput
                        labelValue={addressCompany}
                        placeholderText="Direccion de la empresa"
                        iconName="enviroment"
                        error={errors.addressCompany}
                        onChangeText={(addressCompany: any) => setaddressCompany(addressCompany)}
                        onFocus={() => handleError(null, 'addressCompany')}
                    />
                    <FormSelect
                        selectedValue={state}
                        error={errors.state}
                        onValueChange={(itemValue: any) => setstate(itemValue)}
                        onFocus={() => handleError(null, 'state')}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label={"Selecione la estado"} value={null} enabled={false} />
                        <Picker.Item style={{ fontSize: 14 }} label={"estado 1"} value={"estado1"} enabled={true} />
                        <Picker.Item style={{ fontSize: 14 }} label={"estado 2"} value={"estado2"} enabled={true} />
                        <Picker.Item style={{ fontSize: 14 }} label={"estado 3"} value={"estado3"} enabled={true} />
                    </FormSelect>
                    <FormSelect
                        selectedValue={city}
                        error={errors.city}
                        onValueChange={(itemValue: any) => setcity(itemValue)}
                        onFocus={() => handleError(null, 'city')}
                    >
                        <Picker.Item style={{ fontSize: 14 }} label={"Selecione la ciudad"} value={null} enabled={false} />
                        <Picker.Item style={{ fontSize: 14 }} label={"ciudad 1"} value={"ciudad1"} enabled={true} />
                        <Picker.Item style={{ fontSize: 14 }} label={"ciudad 2"} value={"ciudad2"} enabled={true} />
                        <Picker.Item style={{ fontSize: 14 }} label={"ciudad 3"} value={"ciudad3"} enabled={true} />
                    </FormSelect>
                    {/* <FormInput
                        labelValue={phoneNumber}
                        placeholderText="Telefono"
                        iconName="phone"
                        error={errors.phoneNumber}
                        onChangeText={(phoneNumber: any) => setphoneNumber(phoneNumber)}
                        onFocus={() => handleError(null, 'phoneNumber')}
                        keyboardType={"numeric"}
                    /> */}
                </View>
                <View className="w-full px-10 pt-6 flex flex-row justify-center items-center">
                    <View className="w-12 h-12 border-2 border-color-08 rounded-full flex justify-center items-center">
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
                        onPress={validated}
                        className="flex justify-center items-center w-2/5 h-12 bg-color-04 my-2 mx-2 rounded-2xl"
                    >
                        <Text className="text-color-01 text-lg">Siguiente</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default RegisterBusinessFormInfoScreen;