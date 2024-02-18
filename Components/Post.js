import { View, Image } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import PostHeader from './PostHeader'
import PostActions from './PostActions'
import PostDetails from './PostDetails'

const Post = ({postData}) => {
  return (
    <View style={{minHeight: 500, width: '100%'}} className='relative mt-3 mb-4'>

      <PostHeader postData={postData}/>
      {postData.type == 'img' && (
        <Image source={{uri: postData.media}} resizeMode='cover' style={{width: '100%', height: 500}} />
      )}
      <PostActions />
      <PostDetails postData={postData} />
    </View>
  )
}

export default Post