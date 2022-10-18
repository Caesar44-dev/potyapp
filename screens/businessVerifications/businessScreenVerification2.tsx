// modules
import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Keyboard,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// components
import FormSelect from "../../components/form/formSelect";
import FormInput from "../../components/form/formInput";

// utils
import { width_container } from "../../utils/display";

const BusinessScreenVerification2 = ({ navigation }: any) => {

    const [service, setservice] = useState("")
    const [price, setprice] = useState("")
    const [estimatedTime, setestimatedTime] = useState("")

    // validation
    const [errors, seterrors] = useState<any>({});

    const validated = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!service) {
            handleError('Campo requerido', 'service');
            isValid = false;
        }

        if (!price) {
            handleError('Campo requerido', 'price');
            isValid = false;
        }

        if (!estimatedTime) {
            handleError('Campo requerido', 'estimatedTime');
            isValid = false;
        }

        // execute api post
        if (isValid) {

        }
    };


    const handleError = (error: any, input: any) => {
        seterrors((prevState: any) => ({ ...prevState, [input]: error }));
    };

    return (
        <SafeAreaView className="flex justify-center items-center bg-color-01">
            <ScrollView className="w-full h-full">
                <View className="flex flex-row justify-between items-center pt-4 px-4">
                    <View className="w-12 h-12 flex justify-center items-center">
                        <TouchableOpacity
                            onPress={() => navigation.navigate("")}
                            activeOpacity={0.8}
                        >
                            <Text>
                                <MaterialCommunityIcons name={"menu"} size={30} color={"#999"} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View className="w-12 h-12 flex justify-center items-center">
                        <TouchableOpacity
                            onPress={() => navigation.navigate("")}
                            activeOpacity={0.8}
                        >
                            <Text>
                                <MaterialCommunityIcons name={"bell-badge-outline"} size={30} color={"#999"} />
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>

                <View className="flex flex-col justify-start items-start px-20 pb-4">
                    <Text className="text-2xl font-bold">TecnoSystem</Text>
                </View>

                <View className="w-full h-full flex flex-col justify-center items-center bg-color-09 py-8 rounded-t-3xl">
                    <Text className="py-3 text-lg text-color-01 font-bold">
                        Empresa sin verificacion
                    </Text>

                    <View className="w-full h-full flex justify-start items-center bg-color-01 py-10 rounded-t-3xl">
                        <Text className="text-2xl mb-4 border-b-2 border-b-color-09">
                            Servicios a ofrecer
                        </Text>
                        <View className="w-full flex justify-start items-start">
                            <Text className="text-lg mt-2 px-10">
                                Servicio
                            </Text>
                            <FormSelect
                                selectedValue={service}
                                error={errors.service}
                                onValueChange={(itemValue: any) => setservice(itemValue)}
                                onFocus={() => handleError(null, 'service')}
                            >
                                <Picker.Item style={{ fontSize: 14 }} label={"Selecione el servicio"} value={null} enabled={false} />
                                <Picker.Item style={{ fontSize: 14 }} label={"servicio1"} value={"servicio1"} enabled={true} />
                                <Picker.Item style={{ fontSize: 14 }} label={"servicio2"} value={"servicio2"} enabled={true} />
                                <Picker.Item style={{ fontSize: 14 }} label={"servicio3"} value={"servicio3"} enabled={true} />
                            </FormSelect>

                            <Text className="text-lg mt-2 px-10">
                                Precio de venta
                            </Text>
                            <FormInput
                                labelValue={price}
                                placeholderText="Ingrese el precio de venta"
                                iconName="tags"
                                error={errors.price}
                                onChangeText={(price: any) => setprice(price)}
                                onFocus={() => handleError(null, 'price')}
                            />

                            <Text className="text-lg mt-2 px-10">
                                Tiempo estimado
                            </Text>
                            <FormInput
                                labelValue={estimatedTime}
                                placeholderText="Ingrese el tiempo estimado"
                                iconName="clockcircleo"
                                error={errors.price}
                                onChangeText={(estimatedTime: any) => setestimatedTime(estimatedTime)}
                                onFocus={() => handleError(null, 'estimatedTime')}
                            />
                        </View>
                        <View className="w-full flex flex-row justify-end items-center">
                            <TouchableOpacity
                                onPress={validated}
                                className="flex justify-center items-center w-2/5 h-12 bg-color-04 mt-4 mx-8 rounded-2xl"
                            >
                                <Text className="text-color-01 text-lg">Agregar</Text>
                            </TouchableOpacity>
                        </View>
                        <View className="w-11/12 h-[2px] bg-color-08 my-5 mb-10"></View>

                        {/* map data */}
                        <View
                            style={{
                                width: width_container * 1.1,
                            }}
                            className="w-full h-16 px-8 mb-10 flex flex-row justify-between items-center bg-color-09 rounded-3xl"
                        >
                            <View className="flex flex-col justify-center items-start">
                                <Text className="text-color-01 text-xl">Barba</Text>
                                <Text className="text-color-01 text-base">Tiempo: 1:30 </Text>
                            </View>
                            <View className="flex flex-col justify-center items-center w-20 h-12 bg-color-03 rounded-xl">
                                <Text className="text-xl">$ 150</Text>
                            </View>
                        </View>
                        {/* map data */}

                        <View className="w-full px-10 pt-6 flex flex-row justify-center items-center">
                            <View className="w-8 h-8 border-2 border-color-08 rounded-full flex justify-center items-center">
                                <Text className="text-color-09 text-lg">
                                    1
                                </Text>
                            </View>
                            <View className="w-14 h-[2px] bg-color-08 my-5 mx-1 justify-center">
                                <View className="w-2 h-2 bg-color-08 rounded-full"></View>
                            </View>
                            <View className="w-12 h-12 border-2 border-color-08 rounded-full flex justify-center items-center">
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

                        <View className="w-full flex flex-row justify-center items-center">
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                className="flex justify-center items-center w-2/5 h-12 bg-color-08 mt-4 mx-2 rounded-2xl"
                            >
                                <Text className="text-color-01 text-lg">Regresar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("BusinessScreenVerification3")}
                                className="flex justify-center items-center w-2/5 h-12 bg-color-04 mt-4 mx-2 rounded-2xl"
                            >
                                <Text className="text-color-01 text-lg">Siguiente</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BusinessScreenVerification2;