// modules
import React, { useState } from 'react'
import { View, Text, Image, TouchableOpacity, Dimensions, SafeAreaView } from 'react-native'

// components
import FormInput from '../../components/form/formInput';

// icons
import FormSelectDropdown from '../../components/form/formSelectDropdown';

const RegisterBusinessFormInfo = ({ navigation }: any) => {

    const width = Dimensions.get("window").width;
    const width_container = width * 0.8;

    // api simulation
    const [companyName, setcompanyName] = useState();
    const [location, setlocation] = useState();
    const [addressCompany, setaddressCompany] = useState();
    const [specialization, setspecialization] = useState();
    const [phoneNumber, setphoneNumber] = useState();

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
                        onChangeText={(companyName: any) => setcompanyName(companyName)}
                        placeholderText="Nombre de la empresa"
                        iconType="home"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />

                    <FormSelectDropdown
                        title={"Lugar"}
                        data={["Monterrey, Nuevo Leon", "lugar 2", "lugar 3"]}
                        onSelect={({ selectedItem, index }: any) => {
                            console.log(selectedItem, index)
                            setlocation(selectedItem)
                        }}
                        buttonTextAfterSelection={({ selectedItem, index }: any) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={({ item, index }: any) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
                    />

                    <FormInput
                        labelValue={addressCompany}
                        onChangeText={(addressCompany: any) => setaddressCompany(addressCompany)}
                        placeholderText="Direccion de la empresa"
                        iconType="enviroment"
                        autoCapitalize="none"
                        autoCorrect={false}
                    />
                    <FormSelectDropdown
                        title={"Rubro de especializacion"}
                        data={["Barberia", "Especializacion 1", "Especializacion 2"]}
                        onSelect={({ selectedItem, index }: any) => {
                            console.log(selectedItem, index)
                            setspecialization(selectedItem)
                        }}
                        buttonTextAfterSelection={({ selectedItem, index }: any) => {
                            // text represented after item is selected
                            // if data array is an array of objects then return selectedItem.property to render after item is selected
                            return selectedItem
                        }}
                        rowTextForSelection={({ item, index }: any) => {
                            // text represented for each item in dropdown
                            // if data array is an array of objects then return item.property to represent item in dropdown
                            return item
                        }}
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
                </View>
                <View className="w-full px-10 pt-6 flex flex-row justify-center items-center">
                    <View className="w-10 h-10 border-2 border-color-08 rounded-full flex justify-center items-center">
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
                        onPress={() => navigation.navigate('RegisterBusinessFormMap')}
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