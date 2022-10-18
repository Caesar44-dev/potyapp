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
import AntDesign from "react-native-vector-icons/AntDesign";

const BusinessScreenVerification1 = ({ navigation }: any) => {
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
                            Resumen de citas
                        </Text>

                        <Text className="text-lg mt-2">
                            Logo empresa
                        </Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("")}
                            activeOpacity={0.8}
                            className="w-1/2 h-40 flex-row justify-evenly items-center bg-color-03 rounded-xl mx-auto my-2 p-4"
                        >
                            <View className="w-full h-full flex justify-center items-center bg-color-01 rounded-xl m-2">
                                <AntDesign name={"upload"} size={40} color={"#D786B6"} />
                            </View>
                        </TouchableOpacity>

                        <Text className="text-lg mt-2">
                            Foto exterior o Fachada pricipal
                        </Text>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("")}
                            activeOpacity={0.8}
                            className="w-1/2 h-40 flex-row justify-evenly items-center bg-color-03 rounded-xl mx-auto my-2 p-4"
                        >
                            <View className="w-full h-full flex justify-center items-center bg-color-01 rounded-xl m-2">
                                <AntDesign name={"upload"} size={40} color={"#D786B6"} />
                            </View>
                        </TouchableOpacity>

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

                        <View className="w-full flex flex-row justify-center items-center">
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                className="flex justify-center items-center w-2/5 h-12 bg-color-08 mt-4 mx-2 rounded-2xl"
                            >
                                <Text className="text-color-01 text-lg">Regresar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={() => navigation.navigate("BusinessScreenVerification2")}
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

export default BusinessScreenVerification1;