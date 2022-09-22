import { View, Text } from 'react-native'
import React from 'react'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import SelectDropdown from 'react-native-select-dropdown'

const FormSelectDropdown = ({ title, data, ...props }: any) => {
    return (
        <SelectDropdown
            data={data}
            {...props}
            // onSelect={(selectedItem, index) => {
            //     console.log(selectedItem, index)
            // }}
            // buttonTextAfterSelection={(selectedItem, index) => {
            //     // text represented after item is selected
            //     // if data array is an array of objects then return selectedItem.property to render after item is selected
            //     return selectedItem
            // }}
            // rowTextForSelection={(item, index) => {
            //     // text represented for each item in dropdown
            //     // if data array is an array of objects then return item.property to represent item in dropdown
            //     return item
            // }}
            defaultButtonText={title}
            buttonStyle={{
                width: '80%',
                height: 50,
                backgroundColor: '#d9dbe0',
                borderRadius: 8,
                paddingHorizontal: 20,
                // borderWidth: 1,
                // borderColor: '#444',
                marginVertical: 10,
            }}
            buttonTextStyle={{
                color: '#444',
                textAlign: 'left'
            }}
            renderDropdownIcon={(isOpened) => {
                return <FontAwesome name={isOpened ? 'chevron-up' : 'chevron-down'} color={'#444'} size={18} />;
            }}
            dropdownIconPosition={'right'}
            dropdownStyle={{
                backgroundColor: '#EFEFEF'
            }}
            rowStyle={{
                backgroundColor: '#EFEFEF',
                borderBottomColor: '#C5C5C5'
            }}
            rowTextStyle={{
                color: '#444',
                textAlign: 'left'
            }}
            selectedRowStyle={{
                backgroundColor: 'rgba(0,0,0,0.1)'
            }}
            search
            searchInputStyle={{
                backgroundColor: '#EFEFEF',
                borderRadius: 8,
                borderBottomWidth: 1,
                borderBottomColor: '#444',
            }}
            searchPlaceHolder={'Search here'}
            searchPlaceHolderColor={'darkgrey'}
            renderSearchInputLeftIcon={() => {
                return <FontAwesome name={'search'} color={'#444'} size={18} />;
            }}
        />
    )
}

export default FormSelectDropdown