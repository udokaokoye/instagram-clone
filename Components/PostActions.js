import { View, Text } from 'react-native'
import React from 'react'
import { Icon } from '@rneui/base'

const PostActions = () => {
  return (
    <View className='mt-3 flex-row justify-between mx-2'>
      <View className='flex-row gap-x-3'>
        <Icon name='hearto' type='antdesign' color={'white'}/>
        <Icon name='comment' size={33} type='evilicon' color={'white'}/>
        <Icon name='paper-plane-outline' type='ionicon' color={'white'}/>
      </View>

      <View>
      <Icon name='bookmark-outline' type='material-community' size={30} color={'white'}/>

      </View>
    </View>
  )
}

export default PostActions