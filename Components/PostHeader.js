import { View, Image } from "react-native";
import React from "react";
import CustomText from "./CustomText";
import { Icon } from "@rneui/base";

const PostHeader = ({ postData }) => {
  return (
    <View
      style={{
        top: 0,
        width: "98%",
        zIndex: 10,
        position: postData?.type == "vid" ? "absolute" : "",
        marginTop: postData.type == "vid" && 3,
        marginBottom: 3,
      }}
      className="mx-1 flex-row justify-between items-center"
    >
      <View className="flex-row gap-x-2 items-center">
        <Image
          source={{ uri: postData.profileImage }}
          resizeMode="cover"
          style={{ width: 50, height: 50 }}
          className="rounded-full"
        />
        <View>
          <CustomText className="font-bold">{postData.name}</CustomText>
          {/* {postData.type == 'vid' && (<CustomText>{postData.name} - original audio</CustomText>)} */}
          <CustomText>{postData.name} - original audio</CustomText>
        </View>
      </View>

      <View>
        <Icon name="more-horizontal" type="feather" color={"white"} />
      </View>
    </View>
  );
};

export default PostHeader;
