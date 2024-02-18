import { View, Text, Image } from "react-native";
import React from "react";
import { Icon } from "@rneui/base";
import CustomText from "./CustomText";
const Header = () => {
  return (
    <View className='flex-row justify-between items-center text-white mx-2'>
      <View className='flex-row gap-x-2 items-center'>
        {/* <CustomText className='text-lg'>Instagram</CustomText> */}
        <Image source={require('../assets/insta_white.png')} resizeMode="contain" style={{width: 119, height: 60 }} />
        <Icon color={'white'} name="chevron-thin-down" type="entypo" size={15} />
      </View>

      <View className='flex-row gap-x-6'>
        <Icon color={'white'} name="hearto" type="antdesign" />
        <Icon color={'white'} name="facebook-messenger" type="material-community" />
      </View>
    </View>
  );
};

export default Header;
