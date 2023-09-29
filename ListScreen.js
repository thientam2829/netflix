import React, { Component } from "react";
import {
  TouchableOpacity,
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
} from "react-native";
import { search } from "./api";
export default class ListScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieList: [],
    };
  }
  componentDidMount() {
    this.fetchMovies();
  }

  fetchMovies = async () => {
    try {
      const response = await search("Frozen");
      if (response) {
        this.setState({ movieList: response });
      }
    } catch (error) {
      console.error("Error fetching movies: ", error);
    }
  };

  render() {
    const { movieList } = this.state;
    return (
      <ScrollView style={styles.container}>
        <Text style={styles.heading}>Movie List</Text>
        {movieList.map((movie) => (
          <TouchableOpacity
            key={movie.imdbID}
            onPress={() => {
              this.props.navigation.navigate("Detail", {
                movieName: movie.Title,
                imdbID: movie.imdbID,
              });
            }}
          >
            <View style={styles.movieItem}>
              <Image source={{ uri: movie.Poster }} style={styles.poster} />
              <Text style={styles.movieTitle}>{movie.Title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  heading: {
    fontSize: 30,
    marginBottom: 10,
  },
  movieItem: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderWidth: 1,
    marginBottom: 10,
  },
  poster: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  movieTitle: {
    fontSize: 20,
  },
});
