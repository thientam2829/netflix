import axios from "axios";

const rootURL = "https://www.omdbapi.com/?i=tt3896198&apikey=961ecfbe";

export const search = function (q) {
  const url = `${rootURL}&s=${q}`;
  console.log(url);
  return axios
    .get(url)
    .then((response) => response.data.Search)
    .catch((error) => {
      console.error("Error searching: ", error);
      throw error;
    });
};
