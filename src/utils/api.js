import axios from "axios";

const { REACT_APP_BASE_URI, REACT_APP_API_HOST, REACT_APP_API_KEY } =
	process.env;

const options = {
	params: { hl: "en", gl: "US" },
	headers: {
		"X-RapidAPI-Key": REACT_APP_API_KEY,
		"X-RapidAPI-Host": REACT_APP_API_HOST,
	},
};

export const fetchDataFromApi = async (url) => {
	const { data } = await axios.get(`${REACT_APP_BASE_URI}/${url}`, options);
	return data;
};
