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

const BusinessMainScreenScheduleOpenAppointment = ({ navigation }: any) => {

    const [nameclient, setnameclient] = useState("")
    const [phonenumberclient, setphonenumberclient] = useState("")
    const [rank, setrank] = useState(0)

    // validation
    const [errors, seterrors] = useState<any>({});

    const validated = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!nameclient) {
            handleError('Campo requerido', 'nameclient');
            isValid = false;
        }

        if (!phonenumberclient) {
            handleError('Campo requerido', 'phonenumberclient');
            isValid = false;
        }

        if (!rank) {
            handleError('Campo requerido', 'rank');
            isValid = false;
        }

        if (isValid) {

        }
    };


    const handleError = (error: any, input: any) => {
        seterrors((prevState: any) => ({ ...prevState, [input]: error }));
    };

    return (
        <SafeAreaView className="flex justify-center items-center bg-gray-200">
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

                <View className="w-full h-full flex justify-start items-center bg-color-01 py-10 rounded-t-3xl">
                    <Text className="text-2xl mb-4 border-b-2 border-b-color-09">
                        Nueva Cita
                    </Text>
                    <View className="w-full flex justify-start items-start">
                        <Text className="text-lg font-bold mt-2 px-10">
                            John Doe
                        </Text>
                        <Text className="text-lg mt-2 px-10">
                            Nombre del cliente
                        </Text>
                        <FormInput
                            labelValue={nameclient}
                            placeholderText="Ingrese el nombre"
                            iconName="user"
                            error={errors.nameclient}
                            onChangeText={(nameclient: any) => setnameclient(nameclient)}
                            onFocus={() => handleError(null, 'nameclient')}
                        />

                        <Text className="text-lg mt-2 px-10">
                            Numero Celular del cliente
                        </Text>
                        <FormInput
                            labelValue={phonenumberclient}
                            placeholderText="Ingrese el telefono"
                            iconName="phone"
                            error={errors.phonenumberclient}
                            onChangeText={(phonenumberclient: any) => setphonenumberclient(phonenumberclient)}
                            onFocus={() => handleError(null, 'phonenumberclient')}
                        />

                        <Text className="text-lg mt-2 px-10">
                            Tiempo estimado
                        </Text>
                        <FormSelect
                            selectedValue={rank}
                            error={errors.rank}
                            onValueChange={(itemValue: any) => setrank(itemValue)}
                            onFocus={() => handleError(null, 'rank')}
                        >
                            <Picker.Item style={{ fontSize: 14 }} label={"Rankee el cliente"} value={null} enabled={false} />
                            <Picker.Item style={{ fontSize: 14 }} label={"1 estrella"} value={"1"} enabled={true} />
                            <Picker.Item style={{ fontSize: 14 }} label={"2 estrellas"} value={"2"} enabled={true} />
                            <Picker.Item style={{ fontSize: 14 }} label={"3 estrellas"} value={"3"} enabled={true} />
                            <Picker.Item style={{ fontSize: 14 }} label={"4 estrellas"} value={"4"} enabled={true} />
                            <Picker.Item style={{ fontSize: 14 }} label={"5 estrellas"} value={"5"} enabled={true} />
                        </FormSelect>

                    </View>

                    <View className="w-full flex flex-row justify-center items-center">
                        <TouchableOpacity
                            onPress={() => navigation.navigate("")}
                            className="flex justify-center items-center w-2/5 h-12 bg-color-04 mt-4 mx-2 rounded-2xl"
                        >
                            <Text className="text-color-01 text-lg">Guardar</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BusinessMainScreenScheduleOpenAppointment;