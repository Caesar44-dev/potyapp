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

// icons
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import AntDesign from "react-native-vector-icons/AntDesign";

// components
import FormInput from "../../components/form/formInput";

// utils
import { width_container } from "../../utils/display";

const BusinessScreenVerification4 = ({ navigation }: any) => {

    // states
    const [name, setname] = useState("")
    const [phone, setphone] = useState("")
    const [dni, setdni] = useState("")

    const [standar, setstandar] = useState(true)
    const [personalized, setpersonalized] = useState(false)

    // standard states
    const [lunes, setlunes] = useState(false)
    const [martes, setmartes] = useState(false)
    const [miercoles, setmiercoles] = useState(false)
    const [jueves, setjueves] = useState(false)
    const [viernes, setviernes] = useState(false)
    const [sabado, setsabado] = useState(false)
    const [domingo, setdomingo] = useState(false)

    const [citasEstandarInicio, setcitasEstandarInicio] = useState("")
    const [citasEstandarFinal, setcitasEstandarFinal] = useState("")

    // personalizated states
    const [lunesCitasPersonalizadaActive, setlunesCitasPersonalizadaActive] = useState(false)
    const [lunesCitasPersonalizadaInicio, setlunesCitasPersonalizadaInicio] = useState("")
    const [lunesCitasPersonalizadaFinal, setlunesCitasPersonalizadaFinal] = useState("")

    const [martesCitasPersonalizadaActive, setmartesCitasPersonalizadaActive] = useState(false)
    const [martesCitasPersonalizadaInicio, setmartesCitasPersonalizadaInicio] = useState("")
    const [martesCitasPersonalizadaFinal, setmartesCitasPersonalizadaFinal] = useState("")

    const [miercolesCitasPersonalizadaActive, setmiercolesCitasPersonalizadaActive] = useState(false)
    const [miercolesCitasPersonalizadaInicio, setmiercolesCitasPersonalizadaInicio] = useState("")
    const [miercolesCitasPersonalizadaFinal, setmiercolesCitasPersonalizadaFinal] = useState("")

    const [juevesCitasPersonalizadaActive, setjuevesCitasPersonalizadaActive] = useState(false)
    const [juevesCitasPersonalizadaInicio, setjuevesCitasPersonalizadaInicio] = useState("")
    const [juevesCitasPersonalizadaFinal, setjuevesCitasPersonalizadaFinal] = useState("")

    const [viernesCitasPersonalizadaActive, setviernesCitasPersonalizadaActive] = useState(false)
    const [viernesCitasPersonalizadaInicio, setviernesCitasPersonalizadaInicio] = useState("")
    const [viernesCitasPersonalizadaFinal, setviernesCitasPersonalizadaFinal] = useState("")

    const [sabadoCitasPersonalizadaActive, setsabadoCitasPersonalizadaActive] = useState(false)
    const [sabadoCitasPersonalizadaInicio, setsabadoCitasPersonalizadaInicio] = useState("")
    const [sabadoCitasPersonalizadaFinal, setsabadoCitasPersonalizadaFinal] = useState("")

    const [domingoCitasPersonalizadaActive, setdomingoCitasPersonalizadaActive] = useState(false)
    const [domingoCitasPersonalizadaInicio, setdomingoCitasPersonalizadaInicio] = useState("")
    const [domingoCitasPersonalizadaFinal, setdomingoCitasPersonalizadaFinal] = useState("")

    // validation
    const [errors, seterrors] = useState<any>({});

    const validated = () => {
        Keyboard.dismiss();
        let isValid = true;

        if (!citasEstandarInicio) {
            handleError('Campo requerido', 'citasEstandarInicio');
            isValid = false;
        }

        if (!citasEstandarFinal) {
            handleError('Campo requerido', 'citasEstandarFinal');
            isValid = false;
        }

        // lunes
        if (!lunesCitasPersonalizadaInicio) {
            handleError('Campo requerido', 'lunesCitasPersonalizadaInicio');
            isValid = false;
        }

        if (!lunesCitasPersonalizadaFinal) {
            handleError('Campo requerido', 'lunesCitasPersonalizadaFinal');
            isValid = false;
        }

        // martes
        if (!martesCitasPersonalizadaInicio) {
            handleError('Campo requerido', 'martesCitasPersonalizadaInicio');
            isValid = false;
        }

        if (!martesCitasPersonalizadaFinal) {
            handleError('Campo requerido', 'martesCitasPersonalizadaFinal');
            isValid = false;
        }

        // miercoles
        if (!miercolesCitasPersonalizadaInicio) {
            handleError('Campo requerido', 'miercolesCitasPersonalizadaInicio');
            isValid = false;
        }

        if (!miercolesCitasPersonalizadaFinal) {
            handleError('Campo requerido', 'miercolesCitasPersonalizadaFinal');
            isValid = false;
        }

        // jueves
        if (!juevesCitasPersonalizadaInicio) {
            handleError('Campo requerido', 'juevesCitasPersonalizadaInicio');
            isValid = false;
        }

        if (!juevesCitasPersonalizadaFinal) {
            handleError('Campo requerido', 'juevesCitasPersonalizadaFinal');
            isValid = false;
        }

        // viernes
        if (!viernesCitasPersonalizadaInicio) {
            handleError('Campo requerido', 'viernesCitasPersonalizadaInicio');
            isValid = false;
        }

        if (!viernesCitasPersonalizadaFinal) {
            handleError('Campo requerido', 'viernesCitasPersonalizadaFinal');
            isValid = false;
        }

        // sabado
        if (!sabadoCitasPersonalizadaInicio) {
            handleError('Campo requerido', 'sabadoCitasPersonalizadaInicio');
            isValid = false;
        }

        if (!sabadoCitasPersonalizadaFinal) {
            handleError('Campo requerido', 'sabadoCitasPersonalizadaFinal');
            isValid = false;
        }

        // domingo
        if (!domingoCitasPersonalizadaInicio) {
            handleError('Campo requerido', 'domingoCitasPersonalizadaInicio');
            isValid = false;
        }

        if (!domingoCitasPersonalizadaFinal) {
            handleError('Campo requerido', 'domingoCitasPersonalizadaFinal');
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
                    {/* nombre empresa */}
                    <Text className="text-2xl font-bold">TecnoSystem</Text>
                </View>

                <View className="w-full h-full flex flex-col justify-center items-center bg-color-09 py-8 rounded-t-3xl">
                    <Text className="py-3 text-lg text-color-01 font-bold">
                        Empresa sin verificacion
                    </Text>

                    <View className="w-full h-full flex justify-start items-center bg-color-01 py-10 rounded-t-3xl">
                        <View
                            style={{
                                width: width_container * 1.1,
                            }}
                            className="w-full h-16 px-8 mb-10 flex flex-row justify-start items-center bg-color-09 rounded-3xl"
                        >
                            <View className="flex flex-col justify-center items-center mx-2">
                                <AntDesign name={"user"} size={40} color="#fff" />
                            </View>
                            <View className="flex flex-col justify-center items-start mx-2">
                                <Text className="text-color-01 text-xl">John Doe</Text>
                                <Text className="text-color-01 text-base">+52-999-999-9999 </Text>
                            </View>
                        </View>

                        <View className="w-full flex flex-row justify-center items-center">
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        setpersonalized(false)
                                        setstandar(true)
                                    }
                                }
                                className="flex justify-center items-center w-2/6 h-12 bg-color-04 mt-4 mx-2 rounded-2xl"
                                style={{
                                    opacity: standar ? 1 : 0.5
                                }}
                            >
                                <Text className="text-color-01 font-bold text-base">Estandar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={
                                    () => {
                                        setpersonalized(true)
                                        setstandar(false)
                                    }
                                }
                                className="flex justify-center items-center w-2/6 h-12 bg-color-04 mt-4 mx-2 rounded-2xl"
                                style={{
                                    opacity: personalized ? 1 : 0.5
                                }}
                            >
                                <Text className="text-color-01 font-bold text-base">Personalizado</Text>
                            </TouchableOpacity>
                        </View>

                        {
                            standar ?
                                <View className="w-full flex flex-col justify-center items-center">
                                    <Text className="text-base pt-4">Disponibilidad semanal</Text>
                                    <View className="flex flex-row justify-center items-center">

                                        <TouchableOpacity
                                            onPress={
                                                () => setlunes(!lunes)
                                            }
                                            className="flex justify-center items-center w-10 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: lunes ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">L</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={
                                                () => setmartes(!martes)
                                            }
                                            className="flex justify-center items-center w-10 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: martes ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">M</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={
                                                () => setmiercoles(!miercoles)
                                            }
                                            className="flex justify-center items-center w-10 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: miercoles ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">MI</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={
                                                () => setjueves(!jueves)
                                            }
                                            className="flex justify-center items-center w-10 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: jueves ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">J</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={
                                                () => setviernes(!viernes)
                                            }
                                            className="flex justify-center items-center w-10 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: viernes ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">V</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={
                                                () => setsabado(!sabado)
                                            }
                                            className="flex justify-center items-center w-10 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: sabado ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">S</Text>
                                        </TouchableOpacity>

                                        <TouchableOpacity
                                            onPress={
                                                () => setdomingo(!domingo)
                                            }
                                            className="flex justify-center items-center w-10 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: domingo ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">D</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View className="flex flex-col justify-center items-start mt-4">
                                        <Text className="text-lg mt-2 px-10">
                                            Citas desde
                                        </Text>
                                        <FormInput
                                            labelValue={citasEstandarInicio}
                                            placeholderText="Ingrese citas desde"
                                            iconName="form"
                                            error={errors.citasEstandarInicio}
                                            onChangeText={(citasEstandarInicio: any) => setcitasEstandarInicio(citasEstandarInicio)}
                                            onFocus={() => handleError(null, 'citasEstandarInicio')}
                                        />

                                        <Text className="text-lg mt-2 px-10">
                                            Citas hasta
                                        </Text>
                                        <FormInput
                                            labelValue={citasEstandarFinal}
                                            placeholderText="Ingrese citas hasta"
                                            iconName="form"
                                            error={errors.citasEstandarFinal}
                                            onChangeText={(citasEstandarFinal: any) => setcitasEstandarFinal(citasEstandarFinal)}
                                            onFocus={() => handleError(null, 'citasEstandarFinal')}
                                        />
                                    </View>
                                </View>
                                :
                                <View className="w-full flex flex-col justify-center items-center">
                                    <Text className="text-base pt-4">Disponibilidad semanal</Text>
                                    <View className="w-full flex flex-col justify-center items-center">

                                        <TouchableOpacity
                                            onPress={
                                                () => setlunesCitasPersonalizadaActive(!lunesCitasPersonalizadaActive)
                                            }
                                            className="flex justify-center items-center w-2/3 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: lunesCitasPersonalizadaActive ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">Lunes</Text>
                                        </TouchableOpacity>

                                        {lunesCitasPersonalizadaActive &&
                                            (
                                                <View className="w-5/6 flex flex-col justify-center items-start mt-4">
                                                    <Text className="text-lg mt-1 px-10">
                                                        Citas desde
                                                    </Text>
                                                    <FormInput
                                                        labelValue={lunesCitasPersonalizadaInicio}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.lunesCitasPersonalizadaInicio}
                                                        onChangeText={(lunesCitasPersonalizadaInicio: any) => setlunesCitasPersonalizadaInicio(lunesCitasPersonalizadaInicio)}
                                                        onFocus={() => handleError(null, 'lunesCitasPersonalizadaInicio')}
                                                    />

                                                    <Text className="text-lg mt-2 px-10">
                                                        Citas hasta
                                                    </Text>
                                                    <FormInput
                                                        labelValue={lunesCitasPersonalizadaFinal}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.lunesCitasPersonalizadaFinal}
                                                        onChangeText={(lunesCitasPersonalizadaFinal: any) => setlunesCitasPersonalizadaFinal(lunesCitasPersonalizadaFinal)}
                                                        onFocus={() => handleError(null, 'lunesCitasPersonalizadaFinal')}
                                                    />
                                                </View>
                                            )
                                        }

                                        <TouchableOpacity
                                            onPress={
                                                () => setmartesCitasPersonalizadaActive(!martesCitasPersonalizadaActive)
                                            }
                                            className="flex justify-center items-center w-2/3 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: martesCitasPersonalizadaActive ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">Martes</Text>
                                        </TouchableOpacity>

                                        {martesCitasPersonalizadaActive &&
                                            (
                                                <View className="w-5/6 flex flex-col justify-center items-start mt-4">
                                                    <Text className="text-lg mt-1 px-10">
                                                        Citas desde
                                                    </Text>
                                                    <FormInput
                                                        labelValue={martesCitasPersonalizadaInicio}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.martesCitasPersonalizadaInicio}
                                                        onChangeText={(martesCitasPersonalizadaInicio: any) => setmartesCitasPersonalizadaInicio(lunesCitasPersonalizadaInicio)}
                                                        onFocus={() => handleError(null, 'martesCitasPersonalizadaInicio')}
                                                    />

                                                    <Text className="text-lg mt-2 px-10">
                                                        Citas hasta
                                                    </Text>
                                                    <FormInput
                                                        labelValue={martesCitasPersonalizadaFinal}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.martesCitasPersonalizadaFinal}
                                                        onChangeText={(martesCitasPersonalizadaFinal: any) => setmartesCitasPersonalizadaFinal(martesCitasPersonalizadaFinal)}
                                                        onFocus={() => handleError(null, 'martesCitasPersonalizadaFinal')}
                                                    />
                                                </View>
                                            )
                                        }

                                        <TouchableOpacity
                                            onPress={
                                                () => setmiercolesCitasPersonalizadaActive(!miercolesCitasPersonalizadaActive)
                                            }
                                            className="flex justify-center items-center w-2/3 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: miercolesCitasPersonalizadaActive ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">Miercoles</Text>
                                        </TouchableOpacity>

                                        {miercolesCitasPersonalizadaActive &&
                                            (
                                                <View className="w-5/6 flex flex-col justify-center items-start mt-4">
                                                    <Text className="text-lg mt-1 px-10">
                                                        Citas desde
                                                    </Text>
                                                    <FormInput
                                                        labelValue={miercolesCitasPersonalizadaInicio}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.miercolesCitasPersonalizadaInicio}
                                                        onChangeText={(miercolesCitasPersonalizadaInicio: any) => setmiercolesCitasPersonalizadaInicio(miercolesCitasPersonalizadaInicio)}
                                                        onFocus={() => handleError(null, 'miercolesCitasPersonalizadaInicio')}
                                                    />

                                                    <Text className="text-lg mt-2 px-10">
                                                        Citas hasta
                                                    </Text>
                                                    <FormInput
                                                        labelValue={miercolesCitasPersonalizadaFinal}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.miercolesCitasPersonalizadaFinal}
                                                        onChangeText={(miercolesCitasPersonalizadaFinal: any) => setmiercolesCitasPersonalizadaFinal(miercolesCitasPersonalizadaFinal)}
                                                        onFocus={() => handleError(null, 'miercolesCitasPersonalizadaFinal')}
                                                    />
                                                </View>
                                            )
                                        }

                                        <TouchableOpacity
                                            onPress={
                                                () => setjuevesCitasPersonalizadaActive(!juevesCitasPersonalizadaActive)
                                            }
                                            className="flex justify-center items-center w-2/3 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: juevesCitasPersonalizadaActive ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">Jueves</Text>
                                        </TouchableOpacity>

                                        {juevesCitasPersonalizadaActive &&
                                            (
                                                <View className="w-5/6 flex flex-col justify-center items-start mt-4">
                                                    <Text className="text-lg mt-1 px-10">
                                                        Citas desde
                                                    </Text>
                                                    <FormInput
                                                        labelValue={juevesCitasPersonalizadaInicio}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.juevesCitasPersonalizadaInicio}
                                                        onChangeText={(juevesCitasPersonalizadaInicio: any) => setjuevesCitasPersonalizadaInicio(juevesCitasPersonalizadaInicio)}
                                                        onFocus={() => handleError(null, 'juevesCitasPersonalizadaInicio')}
                                                    />

                                                    <Text className="text-lg mt-2 px-10">
                                                        Citas hasta
                                                    </Text>
                                                    <FormInput
                                                        labelValue={juevesCitasPersonalizadaFinal}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.juevesCitasPersonalizadaFinal}
                                                        onChangeText={(juevesCitasPersonalizadaFinal: any) => setjuevesCitasPersonalizadaFinal(juevesCitasPersonalizadaFinal)}
                                                        onFocus={() => handleError(null, 'juevesCitasPersonalizadaFinal')}
                                                    />
                                                </View>
                                            )
                                        }

                                        <TouchableOpacity
                                            onPress={
                                                () => setviernesCitasPersonalizadaActive(!viernesCitasPersonalizadaActive)
                                            }
                                            className="flex justify-center items-center w-2/3 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: viernesCitasPersonalizadaActive ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">Viernes</Text>
                                        </TouchableOpacity>

                                        {viernesCitasPersonalizadaActive &&
                                            (
                                                <View className="w-5/6 flex flex-col justify-center items-start mt-4">
                                                    <Text className="text-lg mt-1 px-10">
                                                        Citas desde
                                                    </Text>
                                                    <FormInput
                                                        labelValue={viernesCitasPersonalizadaInicio}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.viernesCitasPersonalizadaInicio}
                                                        onChangeText={(viernesCitasPersonalizadaInicio: any) => setviernesCitasPersonalizadaInicio(viernesCitasPersonalizadaInicio)}
                                                        onFocus={() => handleError(null, 'viernesCitasPersonalizadaInicio')}
                                                    />

                                                    <Text className="text-lg mt-2 px-10">
                                                        Citas hasta
                                                    </Text>
                                                    <FormInput
                                                        labelValue={viernesCitasPersonalizadaFinal}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.viernesCitasPersonalizadaFinal}
                                                        onChangeText={(viernesCitasPersonalizadaFinal: any) => setviernesCitasPersonalizadaFinal(viernesCitasPersonalizadaFinal)}
                                                        onFocus={() => handleError(null, 'viernesCitasPersonalizadaFinal')}
                                                    />
                                                </View>
                                            )
                                        }

                                        <TouchableOpacity
                                            onPress={
                                                () => setsabadoCitasPersonalizadaActive(!sabadoCitasPersonalizadaActive)
                                            }
                                            className="flex justify-center items-center w-2/3 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: sabadoCitasPersonalizadaActive ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">Sabado</Text>
                                        </TouchableOpacity>

                                        {sabadoCitasPersonalizadaActive &&
                                            (
                                                <View className="w-5/6 flex flex-col justify-center items-start mt-4">
                                                    <Text className="text-lg mt-1 px-10">
                                                        Citas desde
                                                    </Text>
                                                    <FormInput
                                                        labelValue={sabadoCitasPersonalizadaInicio}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.sabadoCitasPersonalizadaInicio}
                                                        onChangeText={(sabadoCitasPersonalizadaInicio: any) => setsabadoCitasPersonalizadaInicio(sabadoCitasPersonalizadaInicio)}
                                                        onFocus={() => handleError(null, 'sabadoCitasPersonalizadaInicio')}
                                                    />

                                                    <Text className="text-lg mt-2 px-10">
                                                        Citas hasta
                                                    </Text>
                                                    <FormInput
                                                        labelValue={sabadoCitasPersonalizadaFinal}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.sabadoCitasPersonalizadaFinal}
                                                        onChangeText={(sabadoCitasPersonalizadaFinal: any) => setsabadoCitasPersonalizadaFinal(sabadoCitasPersonalizadaFinal)}
                                                        onFocus={() => handleError(null, 'sabadoCitasPersonalizadaFinal')}
                                                    />
                                                </View>
                                            )
                                        }

                                        <TouchableOpacity
                                            onPress={
                                                () => setdomingoCitasPersonalizadaActive(!domingoCitasPersonalizadaActive)
                                            }
                                            className="flex justify-center items-center w-2/3 h-10 mt-4 ml-1 rounded-2xl"
                                            style={{
                                                backgroundColor: domingoCitasPersonalizadaActive ? "#CE5B9D" : "#d9dbe0"
                                            }}
                                        >
                                            <Text className="text-color-02 text-lg">Domingo</Text>
                                        </TouchableOpacity>

                                        {domingoCitasPersonalizadaActive &&
                                            (
                                                <View className="w-5/6 flex flex-col justify-center items-start mt-4">
                                                    <Text className="text-lg mt-1 px-10">
                                                        Citas desde
                                                    </Text>
                                                    <FormInput
                                                        labelValue={domingoCitasPersonalizadaInicio}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.domingoCitasPersonalizadaInicio}
                                                        onChangeText={(domingoCitasPersonalizadaInicio: any) => setdomingoCitasPersonalizadaInicio(domingoCitasPersonalizadaInicio)}
                                                        onFocus={() => handleError(null, 'domingoCitasPersonalizadaInicio')}
                                                    />

                                                    <Text className="text-lg mt-2 px-10">
                                                        Citas hasta
                                                    </Text>
                                                    <FormInput
                                                        labelValue={domingoCitasPersonalizadaFinal}
                                                        placeholderText="Ingrese citas desde"
                                                        iconName="form"
                                                        error={errors.domingoCitasPersonalizadaFinal}
                                                        onChangeText={(domingoCitasPersonalizadaFinal: any) => setdomingoCitasPersonalizadaFinal(domingoCitasPersonalizadaFinal)}
                                                        onFocus={() => handleError(null, 'domingoCitasPersonalizadaFinal')}
                                                    />
                                                </View>
                                            )
                                        }

                                    </View>
                                </View>
                        }

                        <View className="w-11/12 h-[2px] bg-color-08 my-5 mb-10"></View>

                        <View className="w-full flex flex-row justify-center items-center">
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                className="flex justify-center items-center w-2/5 h-12 bg-color-08 mt-4 mx-2 rounded-2xl"
                            >
                                <Text className="text-color-02 text-lg">Regresar</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress={validated}
                                className="flex justify-center items-center w-2/5 h-12 bg-color-04 mt-4 mx-2 rounded-2xl"
                            >
                                <Text className="text-color-02 text-lg">Guardar</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
};

export default BusinessScreenVerification4;