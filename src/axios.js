import axios from "axios";

//Base URL to make a request to the movie database
const instance = axios.create({
	baseURL: "https://api.themoviedb.org/3",
});

export default instance;