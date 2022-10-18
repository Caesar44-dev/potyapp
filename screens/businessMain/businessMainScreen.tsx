// modules
import React from "react";
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,

} from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import Ionicons from "react-native-vector-icons/Ionicons";

// components
import BusinessScreenVerification1 from "../businessVerifications/businessScreenVerification1";
import BusinessScreenVerification2 from "../businessVerifications/businessScreenVerification2";
import BusinessScreenVerification3 from "../businessVerifications/businessScreenVerification3";
import BusinessScreenVerification4 from "../businessVerifications/businessScreenVerification4";
import BusinessMainScreenVerification from "../businessVerifications/businessMainScreenVerification";
import BusinessMainScreenRenewal from "./businessMainScreenRenewal";
import BusinessMainScreenSchedule from "./businessMainScreenSchedule";
import BusinessMainScreenScheduleOpenAppointment from "./businessMainScreenScheduleOpenAppointment";
import BusinessMainScreenScheduleOpenViewAppointment from "./businessMainScreenScheduleOpenViewAppointment";
import BusinessMainScreenHistoryView from "./businessMainScreenHistoryView";

// configs
const Stack = createNativeStackNavigator()

const BusinessMainVerificationNav = () => {
    return (
        <Stack.Navigator initialRouteName="BusinessMainScreen"
            screenOptions={{
                headerShown: false,
                animation: 'slide_from_right'
            }}>

            <Stack.Screen name="BusinessMainScreen" component={BusinessMainScreen} />
            <Stack.Screen name="BusinessMainScreenRenewal" component={BusinessMainScreenRenewal} />

            <Stack.Screen name="BusinessMainScreenSchedule" component={BusinessMainScreenSchedule} />
            <Stack.Screen name="BusinessMainScreenScheduleOpenAppointment" component={BusinessMainScreenScheduleOpenAppointment} />
            <Stack.Screen name="BusinessMainScreenScheduleOpenViewAppointment" component={BusinessMainScreenScheduleOpenViewAppointment} />
            <Stack.Screen name="BusinessMainScreenHistoryView" component={BusinessMainScreenHistoryView} />

            <Stack.Screen name="BusinessMainScreenVerification" component={BusinessMainScreenVerification} />
            <Stack.Screen name="BusinessScreenVerification1" component={BusinessScreenVerification1} />
            <Stack.Screen name="BusinessScreenVerification2" component={BusinessScreenVerification2} />
            <Stack.Screen name="BusinessScreenVerification3" component={BusinessScreenVerification3} />
            <Stack.Screen name="BusinessScreenVerification4" component={BusinessScreenVerification4} />
        </Stack.Navigator>
    )
}

const BusinessMainScreen = ({ navigation }: any) => {
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
                    <View className="w-full h-full flex justify-start items-center bg-color-01 py-10 rounded-t-3xl">
                        <Text className="text-2xl mb-4 border-b-2 border-b-color-09">
                            Resumen de citas
                        </Text>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("BusinessMainScreenSchedule")}
                            activeOpacity={0.8}
                            className="w-4/5 h-20 flex-row justify-evenly items-center bg-color-09 rounded-3xl mx-auto my-2"
                        >
                            <View className="w-14 h-14 flex justify-center items-center bg-color-01 rounded-full">
                                <FontAwesome name={"calendar"} size={30} color={"#D786B6"} />
                            </View>
                            <Text className="w-1/3 text-base font-bold text-color-01">
                                Confirmadas
                            </Text>
                            <View className="w-14 h-14 flex justify-center items-center bg-color-03 rounded-xl">
                                {/* data */}
                                <Text className="text-xl font-bold text-color-02">
                                    15
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => navigation.navigate("")}
                            activeOpacity={0.8}
                            className="w-4/5 h-20 flex-row justify-evenly items-center bg-color-09 rounded-3xl mx-auto my-2"
                        >
                            <View className="w-14 h-14 flex justify-center items-center bg-color-01 rounded-full">
                                <FontAwesome5 name={"money-bill-wave"} size={30} color={"#D786B6"} />
                            </View>
                            <Text className="w-1/3 text-base font-bold text-color-01">
                                Pagadas
                            </Text>
                            <View className="w-14 h-14 flex justify-center items-center bg-color-03 rounded-xl">
                                <Text className="text-xl font-bold text-color-02">
                                    7
                                </Text>
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity
                            onPress={() => navigation.navigate("")}
                            activeOpacity={0.8}
                            className="w-4/5 h-20 flex-row justify-evenly items-center bg-color-09 rounded-3xl mx-auto my-2"
                        >
                            <View className="w-14 h-14 flex justify-center items-center bg-color-01 rounded-full">
                                <Ionicons name={"time-outline"} size={30} color={"#D786B6"} />
                            </View>
                            <Text className="w-1/3 text-base font-bold text-color-01">
                                Pendientes
                            </Text>
                            <View className="w-14 h-14 flex justify-center items-center bg-color-03 rounded-xl">
                                <Text className="text-xl font-bold text-color-02">
                                    2
                                </Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default BusinessMainVerificationNav;