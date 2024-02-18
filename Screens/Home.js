
import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import StoriesCard from '../Components/StoriesCard';
import Post from '../Components/Post';
import Header from '../Components/Header';
import CustomText from '../Components/CustomText';
import React from 'react';

export default function Home() {

  const postDataArray = [
    {
      id: 0,
      name: 'jeremy.jpg',
      profileImage: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      media: 'https://plus.unsplash.com/premium_photo-1681412504969-ca196149e09d?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type:'img',
      caption: 'Capturing the essence of modern elegance in every angle. 🏙✨ Architectural wonders that stand tall and tell stories of innovation and design.'
    },
    {
      id: 1,
      name: 'leviokoye',
      profileImage: "https://yt3.googleusercontent.com/EHA3sQRQ99HF5uqZuX6_WspPqRcnEuiL3qAURJmQfELx0xDqsbyHn3o4EahzR9tY1FSxc06y=s900-c-k-c0x00ffffff-no-rj",
      media: 'https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type:'img',
      caption: "Embracing the coder's life 🖥️💻 Diving deep into lines of code and turning caffeine into solutions. Coding mode: ON. 💡✨"
    },
    {
      id: 2,
      name: 'leviokoye',
      profileImage: "https://yt3.googleusercontent.com/EHA3sQRQ99HF5uqZuX6_WspPqRcnEuiL3qAURJmQfELx0xDqsbyHn3o4EahzR9tY1FSxc06y=s900-c-k-c0x00ffffff-no-rj",
      media: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type:'img',
      caption: "Embracing the coder's life 🖥️💻 Diving deep into lines of code and turning caffeine into solutions. Coding mode: ON. 💡✨"
    },
    {
      id: 3,
      name: 'babygirl.kay',
      profileImage: "https://images.unsplash.com/photo-1638960763018-0ebcdd656a4c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      media: 'https://images.unsplash.com/photo-1608493830924-ec843d9c98c6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      type:'img',
      caption: "Embracing the coder's life 🖥️💻 Diving deep into lines of code and turning caffeine into solutions. Coding mode: ON. 💡✨"
    },
    {
      id: 4,
      type: 'STORY'
    },
    {
      id: 5,
      name: 'babygirl.kayyy',
      profileImage: "https://images.unsplash.com/photo-1638960763018-0ebcdd656a4c?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      media: ['https://images.unsplash.com/photo-1598971037330-d002eba21158?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'https://images.unsplash.com/photo-1608493830924-ec843d9c98c6?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'],
      type:'img',
      caption: "Embracing the coder's life 🖥️💻 Diving deep into lines of code and turning caffeine into solutions. Coding mode: ON. 💡✨"
    }
  ]

  // const postDataArrayWithStoriesPlaceholder = postDataArray.reduce((acc, post, index, array) => {
  //   acc.push(post);
  //   if (index < array.length - 1) {
  //     acc.push({
  //       id: Math.random(),
  //       type: 'STORY'
  //     });
  //   }
  //   return acc;
  // }, []);
  return (

    
    <SafeAreaView className='flex-1 bg-black' >
      <ScrollView>
        <Header />
        <StoriesCard />
        
        {postDataArray.map((postData) => (
          <React.Fragment key={postData.id}>
          <Post postData={postData} />
          </React.Fragment>
        ))}


        {/* <View style={{height: 250}}></View> */}
      </ScrollView>
    </SafeAreaView>
  );
}

