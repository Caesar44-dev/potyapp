// modules
import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

// utils
import { width_container } from "../../utils/display";

const BusinessMainScreenHistoryView = ({ navigation }: any) => {
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
                        Historial
                    </Text>

                    <View className="flex flex-col justify-center items-center pb-8 bg-color-09 rounded-3xl my-2"
                        style={{
                            width: width_container * 1,
                        }}>

                        <View
                            className="h-24 px-6 flex-row justify-between items-center"
                        >
                            <View className="w-3/4 flex flex-col justify-center items-center">
                                <Text className="text-xl font-bold text-color-01">
                                    Cliente nombre
                                </Text>
                                <Text className="text-base font-bold text-color-01">
                                    01/01/2022
                                </Text>
                            </View>

                            <View className="w-1/3 h-14 flex flex-col justify-center items-center bg-color-03 rounded-xl">
                                {/* data */}
                                <Text className="p-2 text-sm font-bold text-color-02 text-center">
                                    Importe  $150.00
                                </Text>
                            </View>

                        </View>
                        <View className="w-3/4 flex flex-col justify-start items-start bg-color-01 rounded-3xl p-5 mb-10">
                            <Text className="text-xl font-bold text-color-02">
                                Atendio
                            </Text>
                            <View
                                className="w-full h-12 flex flex-row justify-start items-center rounded-md bg-[#d9dbe0] px-4 my-4"
                            >
                                <Text>
                                    Jonh Doe
                                </Text>
                            </View>
                            <Text className="text-xl font-bold text-color-02">
                                Hora
                            </Text>
                            <View
                                className="w-full h-12 flex flex-row justify-start items-center rounded-md bg-[#d9dbe0] px-4 my-4"
                            >
                                <Text>
                                    15:00
                                </Text>
                            </View>
                            <Text className="text-xl font-bold text-color-02">
                                Comentarios
                            </Text>
                            <View
                                className="w-full h-12 flex flex-row justify-start items-center rounded-md bg-[#d9dbe0] px-4 my-4"
                            >
                                <Text>
                                    Muy Buen servicio
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BusinessMainScreenHistoryView;