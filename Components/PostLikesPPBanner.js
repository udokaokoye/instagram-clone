import { View, Image } from 'react-native'
import React from 'react'
import CustomText from './CustomText'

const PostLikesPPBanner = ({likesProfilePictures}) => {
  return (
    <View className='relative' style={{minWidth: 40}}>
        {likesProfilePictures?.map((likesProfilePicture, index) => (
    <Image key={index} source={{uri: likesProfilePicture}} style={{width: 15, height:15, position: 'absolute', left: index == 1 ? 10 : index == 2 ? 19 : 0}} resizeMode='cover' className='rounded-full' />
        ))}
    </View>
  )
}

export default PostLikesPPBanner