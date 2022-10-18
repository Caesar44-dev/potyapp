// modules
import React, { useState } from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from "@react-native-picker/picker";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// components
import FormSelect from "../../components/form/formSelect";

// utils
import { width_container } from "../../utils/display";

const BusinessMainScreenHistory = ({ navigation }: any) => {


    // data simulate
    const [date, setdate] = useState("")

    const data = [
        {
            "id": 1,
            "name": "Cliente Nombre",
            "date": "01/01/2022",
            "Importe": "150.00",
        },
        {
            "id": 2,
            "name": "Cliente Nombre",
            "date": "01/01/2022",
            "Importe": "340.00",
        },
        {
            "id": 3,
            "name": "Cliente Nombre",
            "date": "01/01/2022",
            "Importe": "333.00",
        },
        {
            "id": 4,
            "name": "Cliente Nombre",
            "date": "01/01/2022",
            "Importe": "789",
        },
    ];

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

                <View className="flex flex-col justify-start items-start px-20 pb-8">
                    <Text className="text-4xl font-bold">Hola,</Text>
                    <Text className="text-2xl font-bold">TecnoSystem</Text>
                </View>

                <View className="w-full h-full flex justify-start items-center bg-color-01 py-10 pb-10 rounded-t-3xl">
                    <Text className="text-2xl mb-4 border-b-2 border-b-color-09">
                        Agenda
                    </Text>

                    <View className="px-2 py-2">
                        <FormSelect
                            selectedValue={date}
                            onValueChange={(itemValue: any) => setdate(itemValue)}
                        >
                            <Picker.Item style={{ fontSize: 14 }} label={"Selecione fecha"} value={null} enabled={false} />
                            <Picker.Item style={{ fontSize: 14 }} label={"01/01/22"} value={"date1"} enabled={true} />
                            <Picker.Item style={{ fontSize: 14 }} label={"01/01/22"} value={"date2"} enabled={true} />
                            <Picker.Item style={{ fontSize: 14 }} label={"01/01/22"} value={"date3"} enabled={true} />
                        </FormSelect>
                    </View>

                    <View className="pb-8">
                        {data.map((item) => (
                            <TouchableOpacity
                                onPress={() => navigation.navigate("BusinessMainScreenHistoryView")}
                                key={item.id}
                                className="h-24 px-6 flex-row justify-between items-center bg-color-09 rounded-3xl my-2"
                                style={{
                                    width: width_container * 1,
                                }}
                            >
                                <View className="w-1/3 flex flex-col justify-center items-center">
                                    <Text className="text-xl font-bold text-color-01">
                                        {item.name}
                                    </Text>
                                    <Text className="text-base font-bold text-color-01">
                                        {item.date}
                                    </Text>
                                </View>

                                <View className="w-1/3 h-14 flex flex-col justify-center items-center bg-color-03 rounded-xl">
                                    {/* data */}
                                    <Text className="p-2 text-sm font-bold text-color-02 text-center">
                                        Importe   ${item.Importe}
                                    </Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BusinessMainScreenHistory;