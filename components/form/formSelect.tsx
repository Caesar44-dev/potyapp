// modules
import { View, Text } from 'react-native';
import React, { useState } from 'react';
import { Picker } from '@react-native-picker/picker';

const FormSelect = ({ title, children, error, ...props }: any) => {

    const [isFocused, setIsFocused] = useState(false);

    // const pickerRef = useRef<any>();

    // function open() {
    //     pickerRef.current.focus();
    // }

    // function close() {
    //     pickerRef.current.blur();
    // }

    return (
        <View className="w-full px-8">
            <View className="w-full h-12 flex flex-row justify-start items-center rounded-md bg-[#d9dbe0] px-4 my-2 border-2"
                style={{
                    borderColor:
                        error
                            ? "#ff2334"
                            : isFocused
                                ? "#999"
                                : "#d9dbe0",
                }}
            >
                <Picker
                    style={{
                        width: "100%",
                        height: 48,
                    }}
                    // ref={pickerRef}
                    mode="dropdown"
                    onFocus={() => setIsFocused(true)}
                    onBlur={() => setIsFocused(false)}
                    {...props}
                // prompt="Pick one, just one"
                >
                    {children}
                    {/* {data.data.map((data: any) => {
                        return (
                            <Picker.Item key={data.id} label={data.label} value={data.id} enabled={data.enabled} />
                        )
                    })} */}
                </Picker>
            </View>
        </View>
    )
}

export default FormSelect;