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

const BusinessMainScreenScheduleOpenViewAppointment = ({ navigation }: any) => {
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

                <View className="w-full h-full flex flex-col justify-center items-center">
                    <View className="w-full h-full flex-col bg-color-07 rounded-t-3xl">

                        <View className="w-full h-full flex justify-start items-center bg-color-01 py-10 p-5 pb-20 rounded-3xl">
                            <Text className="text-2xl mb-4 border-b-2 border-b-color-09 rounded-3xl">
                                Citas de clientes
                            </Text>

                            <Text className="text-2xl font-bold text-color-02 p-2">
                                John Doe
                            </Text>

                            <View className="w-full h-full bg-color-01 rounded-3xl py-2">
                                <TouchableOpacity
                                    onPress={() => navigation.navigate("")}
                                    activeOpacity={0.8}
                                    className="w-4/5 h-24 flex-row justify-evenly items-center bg-color-09 rounded-3xl mx-auto my-2"
                                >
                                    <View className="w-1/3 flex justify-center items-center">
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            Cliente nombre
                                        </Text>
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            +52 999 999 9999
                                        </Text>
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            4 estrellas
                                        </Text>
                                    </View>
                                    <View className="w-1/2 h-14 flex justify-center items-center bg-color-03 rounded-xl">
                                        <Text className="text-xs font-bold text-color-02">
                                            Corte pelo confirmado
                                        </Text>
                                        <Text className="text-xs font-bold text-color-02">
                                            01/01/2022
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("")}
                                    activeOpacity={0.8}
                                    className="w-4/5 h-24 flex-row justify-evenly items-center bg-color-09 rounded-3xl mx-auto my-2"
                                >
                                    <View className="w-1/3 flex justify-center items-center">
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            Cliente nombre
                                        </Text>
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            +52 999 999 9999
                                        </Text>
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            4 estrellas
                                        </Text>
                                    </View>
                                    <View className="w-1/2 h-14 flex justify-center items-center bg-color-03 rounded-xl">
                                        {/* data */}
                                        <Text className="text-xs font-bold text-color-02">
                                            Corte pelo confirmado
                                        </Text>
                                        <Text className="text-xs font-bold text-color-02">
                                            01/01/2022
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("")}
                                    activeOpacity={0.8}
                                    className="w-4/5 h-24 flex-row justify-evenly items-center bg-color-09 rounded-3xl mx-auto my-2"
                                >
                                    <View className="w-1/3 flex justify-center items-center">
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            Cliente nombre
                                        </Text>
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            +52 999 999 9999
                                        </Text>
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            4 estrellas
                                        </Text>
                                    </View>
                                    <View className="w-1/2 h-14 flex justify-center items-center bg-color-03 rounded-xl">
                                        {/* data */}
                                        <Text className="text-xs font-bold text-color-02">
                                            Corte pelo confirmado
                                        </Text>
                                        <Text className="text-xs font-bold text-color-02">
                                            01/01/2022
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("")}
                                    activeOpacity={0.8}
                                    className="w-4/5 h-24 flex-row justify-evenly items-center bg-color-09 rounded-3xl mx-auto my-2"
                                >
                                    <View className="w-1/3 flex justify-center items-center">
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            Cliente nombre
                                        </Text>
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            +52 999 999 9999
                                        </Text>
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            4 estrellas
                                        </Text>
                                    </View>
                                    <View className="w-1/2 h-14 flex justify-center items-center bg-color-03 rounded-xl">
                                        {/* data */}
                                        <Text className="text-xs font-bold text-color-02">
                                            Corte pelo confirmado
                                        </Text>
                                        <Text className="text-xs font-bold text-color-02">
                                            01/01/2022
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                                <TouchableOpacity
                                    onPress={() => navigation.navigate("")}
                                    activeOpacity={0.8}
                                    className="w-4/5 h-24 flex-row justify-evenly items-center bg-color-09 rounded-3xl mx-auto my-2"
                                >
                                    <View className="w-1/3 flex justify-center items-center">
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            Cliente nombre
                                        </Text>
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            +52 999 999 9999
                                        </Text>
                                        <Text className="w-full text-center text-xs font-bold text-color-01">
                                            4 estrellas
                                        </Text>
                                    </View>
                                    <View className="w-1/2 h-14 flex justify-center items-center bg-color-03 rounded-xl">
                                        {/* data */}
                                        <Text className="text-xs font-bold text-color-02">
                                            Corte pelo confirmado
                                        </Text>
                                        <Text className="text-xs font-bold text-color-02">
                                            01/01/2022
                                        </Text>
                                    </View>
                                </TouchableOpacity>

                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BusinessMainScreenScheduleOpenViewAppointment;