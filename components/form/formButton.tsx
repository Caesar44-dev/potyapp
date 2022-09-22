// modules
import React from 'react'
import { Text, TouchableOpacity } from 'react-native'

const FormButton = ({ title, ...rest }: any) => {
    return (
        <TouchableOpacity
            className="flex justify-center items-center w-1/2 h-12 bg-color-01 my-5"
            {...rest}
        >
            <Text className="text-color-02 text-lg">{title}</Text>
        </TouchableOpacity>
    );
};

export default FormButton;