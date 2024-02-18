import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Image } from "react-native";
import Header from "./Components/Header";
import StoriesCard from "./Components/StoriesCard";
import Post from "./Components/Post";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { Icon } from "@rneui/base";
import CustomText from "./Components/CustomText";
import HomeStack from "./Stacks/HomeStack";

export default function App() {
  const Stack = createNativeStackNavigator();
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      
      <Tab.Navigator
        screenOptions={{
          tabBarStyle: {
            backgroundColor: "black",
            borderTopWidth: 0,
          },
        }}
      >
        <Tab.Screen
          name="HomeTab"
          component={HomeStack}
          options={{
            tabBarLabelStyle: { display: "none" },
            headerShown: false,
            tabBarIcon: () => (
              <Icon name="home" type="foundation" color={"white"} />
            ),
          }}
        />
        <Tab.Screen
          name="search"
          component={HomeStack}
          options={{
            tabBarLabelStyle: { display: "none" },
            headerShown: false,
            tabBarIcon: () => (
              <Icon name="search" type="feather" color={"white"} />
            ),
          }}
        />
        <Tab.Screen
          name="addpost"
          component={HomeStack}
          options={{
            tabBarLabelStyle: { display: "none" },
            headerShown: false,
            tabBarIcon: () => (
              <View>
                <Icon name="diff-added" type="octicon" color={"white"} />
              </View>
            ),
          }}
        />
        <Tab.Screen
          name="reel"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabelStyle: { display: "none" },
            tabBarIcon: () => (
              <Image
                source={require("./assets/reel_icon.png")}
                style={{ width: 23, height: 23 }}
              />
            ),
          }}
        />
        <Tab.Screen
          name="profile"
          component={HomeStack}
          options={{
            headerShown: false,
            tabBarLabelStyle: { display: "none" },

            tabBarIcon: () => (
              <Image
                source={{
                  uri: "https://yt3.googleusercontent.com/EHA3sQRQ99HF5uqZuX6_WspPqRcnEuiL3qAURJmQfELx0xDqsbyHn3o4EahzR9tY1FSxc06y=s900-c-k-c0x00ffffff-no-rj",
                }}
                style={{ width: 25, height: 25 }}
                className="rounded-full"
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
