// modules
import React from 'react'
import { View, TextInput } from 'react-native'

// icons
import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInput = ({ labelValue, placeholderText, iconType, ...props }: any) => {
    return (
        <View className="w-full px-8">
            <View
                className="w-full h-12 flex flex-row justify-start items-center rounded-md bg-[#d9dbe0] px-4 my-2"
            >
                <View className="p-2">
                    <AntDesign name={iconType} size={20} color="#666" />
                </View>
                <TextInput
                    className="flex-1 mx-2"
                    value={labelValue}
                    numberOfLines={1}
                    ellipsizeMode="head"
                    placeholder={placeholderText}
                    placeholderTextColor="#666"
                    maxLength={42}
                    {...props}
                />
            </View>
        </View>
    );
};

export default FormInput;