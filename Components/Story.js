import { View, Text, ImageBackground } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { LinearGradient } from "expo-linear-gradient";
import { Icon } from "@rneui/base";
const Story = ({ image, index, name }) => {
  return (
    // <ImageBackground source={{uri: image}} resizeMode='cover' style={{width: 70, height:70}} className='rounded-full overflow-hidden'>

    // </ImageBackground>

    <View className="relative">
      <LinearGradient
        colors={
          index == 224
            ? ["#363636", "#363636"]
            : ["#FFC600", "#FE5A1B", "#E5019E", "#DA00B4"]
        } // Adjust these colors to your gradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={{
          borderRadius: 50, // Adjust this value to control the roundness
          width: 80,
          height: 80,
          padding: 3, // Optional: Add padding to control the width of the gradient border
          marginLeft: index == 0 ? 5 : 15,
        }}
      >
        <ImageBackground
          source={{ uri: image }}
          resizeMode="cover"
          style={{ width: "100%", height: "100%" }}
          className="rounded-full overflow-hidden"
        ></ImageBackground>
      </LinearGradient>
      <CustomText
        style={{
          marginLeft: index == 0 ? 5 : 15,
          color: index == 0 ? "#A8A8A8" : "white",
        }}
        className="text-center mt-1"
      >
        {index == 0 ? "Your story" : name}
      </CustomText>
      {index == 224 && (
        <View
          style={{ right: 0, bottom: 27, zIndex: 10, width: 20, height: 20 }}
          className=" bg-blue-500 rounded-full absolute flex justify-center items-center"
        >
          <Icon name="add" size={18} color={"white"} />
        </View>
      )}
    </View>
  );
};

export default Story;
