import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import PostLikesPPBanner from "./PostLikesPPBanner.js";
const PostDetails = ({postData}) => {

    const likesProfilePictures = [
        'https://images.unsplash.com/photo-1638960763018-0ebcdd656a4c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
        'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D',
        'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    ]
  return (
    <View className='mx-2 mt-1'>
      <View className='flex-row'>
        <PostLikesPPBanner likesProfilePictures={likesProfilePictures} />
        <CustomText>Liked by <CustomText className='font-bold'>_skatelord.fk</CustomText> and <CustomText className='font-bold'>22,131</CustomText> others</CustomText>
      </View>

      <CustomText className='mt-1'><CustomText className='font-bold'>{postData.name}</CustomText> {postData.caption}</CustomText>

      <TouchableOpacity className='mt-1'><CustomText className='text-gray-400'>View all 1,230 comments</CustomText></TouchableOpacity>
      <CustomText className='text-gray-400 mt-1'>12 hours ago</CustomText>
    </View>
  );
};

export default PostDetails;
