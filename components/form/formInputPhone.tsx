// modules
import React, { useState } from 'react';
import {
    View,
    Text,
    TextInput,
} from 'react-native';
import CountryPicker, { Country } from 'react-native-country-picker-modal'

// utils
import { setWidth, setHeight } from "../../utils/display"

const FormInputPhone = ({ navigation, ...props }: any) => {

    const [isVisible, setisVisible] = useState(false)

    const [phoneNumber, setPhoneNumber] = useState("");

    const [countryCode, setCountryCode] = useState<any>("MX")

    const [callingCode, setcallingCode] = useState("52")

    const onSelect = (country: Country) => {
        setCountryCode(country.cca2)
        setcallingCode(country.callingCode[0])
        console.log(country)
    }

    return (
        <View>
            <View className="w-full flex flex-row justify-center items-center bg-color-01 border-[1.5px] border-color-07 rounded-3xl"
                style={{
                    width: setWidth(80),
                }}
            >
                <CountryPicker
                    onSelect={onSelect}
                    withEmoji
                    withFilter
                    withFlag
                    countryCode={countryCode}
                    withCallingCode
                    visible={isVisible}
                    onClose={() => setisVisible(false)}
                    translation={"spa"}
                    region={"Americas"}
                    theme={{
                        filterPlaceholderTextColor: "#999",
                    }}
                    containerButtonStyle={{
                        width: 30
                    }}
                    modalProps={{
                        animationType: "fade"
                    }}
                    filterProps={{
                        placeholder: "Buscar",
                        style: {
                            borderBottomColor: "#111",
                            width: "100%",
                            height: 70,
                        },
                    }}
                    flatListProps={{
                        contentContainerStyle: {
                            paddingHorizontal: 10,
                        },
                    }}
                    {...props}
                />
                <View
                    className="flex justify-center items-center"
                    style={{
                        width: setWidth(15),
                        height: setHeight(6),
                    }}
                >
                    <Text className="text-color-02 text-base">{`+${callingCode}`}</Text>
                </View>
                <TextInput
                    className="text-color-02 text-base flex justify-center items-center ml-1"
                    style={{
                        width: setWidth(50),
                        height: setHeight(6),
                    }}
                    placeholder="Ingresa tu numero"
                    placeholderTextColor={"#999"}
                    selectionColor={"#111"}
                    keyboardType="number-pad"
                    onChangeText={
                        (text) => {
                            setPhoneNumber(`+${callingCode}${text}`)
                            console.log(`+${callingCode}${text}`)
                        }
                    }
                />
            </View>
            {/* <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => navigation.navigate('Verification', { phoneNumber })}>
                <Text style={styles.signinButtonText}>Contiue</Text>
            </TouchableOpacity> */}
        </View>

    );
};

export default FormInputPhone;
