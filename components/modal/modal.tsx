// modules
import React from 'react'
import { View, Text, TouchableOpacity, Dimensions } from 'react-native'

const Modal = () => {

    const width = Dimensions.get("window").width;
    // const height = Dimensions.get("window").height;

    const width_container = width * 0.8;
    
    return (
        <TouchableOpacity
            disabled={true}
            className={"flex justify-center items-center"}
        >
            <View 
            className=""
            style={{
                width: width_container * 1,
                height: width_container - 70
            }}>
                <View>
                    <Text>
                        modal
                    </Text>
                    <Text>
                        modal
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default Modal