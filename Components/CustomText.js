import { View, Text } from 'react-native'
import React, { useContext } from 'react'

const CustomText = (props) => {

    
    return <Text {...props} style={[{ color: 'white' }, props.style]}>{props.children}</Text>;

}

export default CustomText