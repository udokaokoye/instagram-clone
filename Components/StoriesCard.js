import { View, Text, FlatList } from 'react-native'
import React from 'react'
import CustomText from './CustomText'
import Story from './Story'

const StoriesCard = ({withUserStores = true}) => {

  const storiesCardImagesWithUserStories = [
      // this is technically the logged in user, that's why it has a unique ID
    {
      id: 224,
      name: 'jakebarnes', 
      image: 'https://images.unsplash.com/photo-1675903734274-9a4b93e8edb4?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    },
    {
      id: 3,
      name: 'dembesnr', 
      image: 'https://images.unsplash.com/photo-1586716402203-79219bede43c?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 4,
      name: 'lacobyspa', 
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 5,
      name: 'jeremy.jpg', 
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 6,
      name: 'ahmedguma', 
      image:  'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'
        
    },
    {
      id: 7,
      name: 'babygirl.kay', 
      image: 'https://images.unsplash.com/photo-1638960763018-0ebcdd656a4c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]

  const storiesCardImagesWithoutUserStories = [
    
    {
      id: 3,
      name: 'dembesnr', 
      image: 'https://images.unsplash.com/photo-1586716402203-79219bede43c?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 4,
      name: 'lacobyspa', 
      image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 5,
      name: 'jeremy.jpg', 
      image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',

    },
    {
      id: 6,
      name: 'ahmedguma', 
      image:  'https://images.unsplash.com/photo-1615813967515-e1838c1c5116?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D'
        
    },
    {
      id: 7,
      name: 'babygirl.kay', 
      image: 'https://images.unsplash.com/photo-1638960763018-0ebcdd656a4c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
    }
  ]
  



  return (
    <View>

<FlatList
        data={withUserStores ? storiesCardImagesWithUserStories : storiesCardImagesWithoutUserStories}
        horizontal
        renderItem={({item}) => <Story image={item.image} index={item.id} name={item.name}/>}
        keyExtractor={item => item.id}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  )
}

export default StoriesCard