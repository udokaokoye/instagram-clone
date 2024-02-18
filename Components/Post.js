import { View, Image, FlatList, Dimensions } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import PostHeader from "./PostHeader";
import PostActions from "./PostActions";
import PostDetails from "./PostDetails";
import StoriesCard from "./StoriesCard";
import { Icon } from "@rneui/base";

const Post = ({ postData }) => {
  return (
    <View>
      {postData.type == "STORY" ? (
        <React.Fragment>
          <CustomText className="mb-3 mx-5 text-xl font-bold">
            Stories
          </CustomText>
          <StoriesCard withUserStores={false} />
        </React.Fragment>
      ) : (
        <View
          style={{ minHeight: 500, width: "100%" }}
          className="relative mt-3 mb-4"
        >
          <PostHeader postData={postData} />
          {typeof postData.media == "string" ? (
            postData.type == "img" && (
              <Image
                source={{ uri: postData.media }}
                resizeMode="cover"
                style={{ width: "100%", height: 500 }}
              />
            )
          ) : (
            <FlatList
              data={postData.media}
              horizontal
              renderItem={({ item, index }) => (



                  <Image
                    source={{ uri: item }}
                    resizeMode="cover"
                    style={{
                      width: Dimensions.get("window").width,
                      minHeight: 500,
                    }}
                  />
              )}
              keyExtractor={(item) => item}
              showsHorizontalScrollIndicator={false}
              snapToAlignment="start"
              decelerationRate={"fast"}
              snapToInterval={Dimensions.get("window").width}
            />
          )}

          {/* {postData.type == 'img' && (
          <Image source={{uri: postData.media}} resizeMode='cover' style={{width: '100%', height: 500}} />
        )} */}
          <PostActions />
          <PostDetails postData={postData} />
        </View>
      )}
    </View>
  );
};

export default Post;
