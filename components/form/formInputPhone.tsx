// modules
import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useRef, useState } from 'react'
import { View, TextInput } from 'react-native'

// context
import { AuthContext } from '../../context/auth/auth';

const FormInputPhone = ({ ...props }: any) => {

    const navigation = useNavigation<any>()

    const { LoginSmsClientes, isAuth } = useContext(AuthContext);

    const [otp, setotp] = useState<String[]>(new Array(4).fill(""))

    const [activeOTPIndex, setactiveOTPIndex] = useState(0)

    const inputRef = useRef<any>(null)

    const onChangeInput = (value: any, index: number) => {

        const newOTP: String[] = [...otp];

        newOTP[index] = value.substring(value.length - 1);

        if (!value) setactiveOTPIndex(index - 1);
        else setactiveOTPIndex(index + 1);
        if (value === "Backspace") setactiveOTPIndex(index - 1)
        setotp(newOTP);
    }

    // console.log(String(otp).replace(/,/g, ''));

    useEffect(() => {
        inputRef.current?.focus()
    }, [activeOTPIndex])

    useEffect(() => {
        if (otp.length === 4) {
            LoginSmsClientes(String(otp).replace(/,/g, ''))
        }
        if (isAuth) {
            navigation.navigate("WelcomeScreen")
        }
    }, [otp, isAuth])

    return (
        <View className="w-full flex flex-col justify-center items-center px-8">
            <View
                className="w-full flex flex-row justify-center items-center px-4 my-3"
            >
                {otp.map((_, index) => {
                    return (
                        <View key={index}>
                            <TextInput
                                {...props}
                                ref={index === activeOTPIndex ? inputRef : null}
                                className="w-12 h-12 border-2 rounded-xl mx-2 bg-color-03 outline-none text-center font-semibold text-xl border-color-01 focus:border-color-04 focus:text-color-02 text-color-04"
                                keyboardType="numeric"
                                onChangeText={(e) => onChangeInput(e, index)}
                                onKeyPress={({ nativeEvent }) => {
                                    if (nativeEvent.key === 'Backspace') {
                                        setactiveOTPIndex(index - 1)
                                    }
                                }}
                                // value={otp[index]}
                                value={otp[index]}
                                autoCapitalize="none"
                                autoCorrect={false}
                            />
                        </View>
                    )
                })}
            </View>
        </View>
    );
};

export default FormInputPhone;