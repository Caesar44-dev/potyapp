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
import AntDesign from "react-native-vector-icons/AntDesign";

// components
import FormSelect from "../../components/form/formSelect";

// utils
import { width_container } from "../../utils/display";

const BusinessMainScreenSchedule = ({ navigation }: any) => {

    // data simulate
    const [date, setdate] = useState("")

    const data = [
        {
            "id": 1,
            "name": "John Doe",
            "date": "01/01/2022",
            "confirmadas": 15,
        },
        {
            "id": 2,
            "name": "John Doe",
            "date": "01/01/2022",
            "confirmadas": 5,
        },
        {
            "id": 3,
            "name": "John Doe",
            "date": "01/01/2022",
            "confirmadas": 20,
        },
        {
            "id": 4,
            "name": "John Doe",
            "date": "01/01/2022",
            "confirmadas": 2,
        },
        {
            "id": 5,
            "name": "John Doe",
            "date": "01/01/2022",
            "confirmadas": 2,
        },
        {
            "id": 6,
            "name": "John Doe",
            "date": "01/01/2022",
            "confirmadas": 2,
        },
        {
            "id": 7,
            "name": "John Doe",
            "date": "01/01/2022",
            "confirmadas": 3,
        },
        {
            "id": 8,
            "name": "John Doe",
            "date": "01/01/2022",
            "confirmadas": 1,
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
                            <View
                                key={item.id}
                                className="h-20 px-6 flex-row justify-between items-center bg-color-09 rounded-3xl my-2"
                                style={{
                                    width: width_container * 1.2,
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
                                    <Text className="p-2 text-sm font-bold text-color-02 text-center">
                                        Confirmadas  {item.confirmadas}
                                    </Text>
                                </View>
                                <View className="w-1/3 h-full flex-row justify-center items-center mx-2">
                                    <View className="w-1/2 h-full flex justify-center items-center bg-color-04">
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate("")}
                                            activeOpacity={0.8}
                                        >
                                            <Text>
                                                <AntDesign name={"book"} size={30} color={"#fff"} />
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View className="w-1/2 h-full flex justify-center items-center bg-green-400">
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate("BusinessMainScreenScheduleOpenAppointment")}
                                            activeOpacity={0.8}
                                        >
                                            <Text>
                                                <AntDesign name={"plus"} size={30} color={"#fff"} />
                                            </Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BusinessMainScreenSchedule;