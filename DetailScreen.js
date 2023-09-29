import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { view } from "./api"; // Import hàm view từ api.js

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: null, // Lưu thông tin chi tiết phim
    };
  }

  componentDidMount() {
    const imdbID = this.props.navigation.getParam("imdbID");
    console.log("imdbID:", imdbID);
    view(imdbID)
      .then((data) => {
        this.setState({ movieDetails: data });
      })
      .catch((error) => {
        console.error("Error fetching movie details: ", error);
      });
  }

  render() {
    const { movieDetails } = this.state;

    return (
      <View style={{ padding: 20, paddingTop: 100 }}>
        <Text style={{ fontSize: 30 }}>Detail Screen:</Text>
        {movieDetails ? (
          <View>
            <Image
              source={{ uri: movieDetails.Poster }}
              style={{ width: 200, height: 300 }}
            />
            <Text>Title: {movieDetails.Title}</Text>
            <Text>Year: {movieDetails.Year}</Text>
            <Text>Director: {movieDetails.Director}</Text>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    );
  }
}
