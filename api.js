import axios from "axios";

const rootURL = "http://www.omdbapi.com/?apikey=961ecfbe"; // Thay YOUR_API_KEY bằng API key của bạn

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

export const view = function (id) {
  const url = `${rootURL}&i=${id}&plot=short&r=json`;
  console.log(url);
  return axios
    .get(url)
    .then((response) => response.data)
    .catch((error) => {
      console.error("Error viewing: ", error);
      throw error;
    });
};
