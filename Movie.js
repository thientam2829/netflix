import React, { Component } from "react";
import { View, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import ListScreen from "./ListScreen";
import DetailScreen from "./DetailScreen";

const AppNavigator = createStackNavigator(
  {
    List: {
      screen: ListScreen,
    },
    Detail: {
      screen: DetailScreen,
    },
  },
  {
    initialRouteName: "List",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e",
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold",
      },
    },
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class Movie extends Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={"darkred"} barStyle={"light-content"} />
        <AppContainer />
      </View>
    );
  }
}
