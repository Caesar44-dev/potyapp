// modules
import React, { useState } from 'react'
import { View, TextInput } from 'react-native'

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({ labelValue, placeholderText, iconName, error, password, ...props }: any) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View className="w-full px-8">
            <View
                className="w-full h-12 flex flex-row justify-start items-center rounded-md bg-[#d9dbe0] px-4 my-2 border-2"
                style={{
                    borderColor:
                        error
                            ? "#ff2334"
                            : isFocused
                                ? "#999"
                                : "#d9dbe0",
                }}
            >
                <View className="p-2">
                    <AntDesign name={iconName} size={20} color="#666" />
                </View>
                <TextInput
                    className="flex-1 mx-2"
                    value={labelValue}
                    numberOfLines={1}
                    ellipsizeMode="head"
                    placeholder={error ? error : placeholderText}
                    placeholderTextColor="#666"
                    maxLength={42}
                    autoCapitalize="none"
                    autoCorrect={false}
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                />
            </View>
        </View>
    );
};

export default FormInput;