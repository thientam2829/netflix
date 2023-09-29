import React, { Component } from "react";
import { View, Text, Image, ScrollView, StyleSheet } from "react-native";
import axios from "axios";

export default class DetailScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movieDetails: null,
    };
  }

  componentDidMount() {
    const imdbID = this.props.navigation.getParam("imdbID"); // IMDb ID của phim cần lấy thông tin
    const apiKey = "961ecfbe";
    const apiUrl = `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}`;
    axios
      .get(apiUrl)
      .then((response) => {
        const movieDetails = response.data;
        this.setState({ movieDetails });
      })
      .catch((error) => {
        console.error("Error fetching movie details: ", error);
      });
  }

  render() {
    const { movieDetails } = this.state;

    return (
      <ScrollView contentContainerStyle={styles.container}>
        {movieDetails ? (
          <View style={styles.movieDetailsContainer}>
            <View style={styles.leftContent}>
              <Image
                source={{ uri: movieDetails.Poster }}
                style={styles.posterImage}
              />
              <Text style={styles.ratingText}>
                IMDb Rating: {movieDetails.imdbRating}
              </Text>
              <Text style={styles.voteText}>
                IMDb Votes: {movieDetails.imdbVotes}
              </Text>
            </View>
            <View style={styles.rightContent}>
              <Text style={styles.titleText}>Title: {movieDetails.Title}</Text>
              <Text style={styles.detailText}>Year: {movieDetails.Year}</Text>
              <Text style={styles.detailText}>
                Director: {movieDetails.Director}
              </Text>
              <Text style={styles.detailText}>Genre: {movieDetails.Genre}</Text>
              <Text style={styles.detailText}>
                Released: {movieDetails.Released}
              </Text>
              <Text style={styles.detailText}>Plot: {movieDetails.Plot}</Text>
              <Text style={styles.detailText}>
                Writer: {movieDetails.Writer}
              </Text>
              <Text style={styles.detailText}>
                Actors: {movieDetails.Actors}
              </Text>
            </View>
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  // Các kiểu CSS khác

  movieDetailsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leftContent: {
    alignItems: "flex-start",
  },
  rightContent: {
    alignItems: "flex-start",
    flexWrap: "wrap",
  },
  ratingText: {
    fontSize: 20,
    marginBottom: 10,
  },
  voteText: {
    fontSize: 20,
    marginBottom: 10,
  },
  posterImage: {
    width: 200,
    height: 300,
    marginTop: 20,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 20,
  },
  detailText: { fontSize: 15, maxWidth: 250 },
});
