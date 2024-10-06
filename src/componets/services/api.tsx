import axios from 'axios';
import { ACCESS_TOKEN_AUTH, BASE_URL, TYPE_MOVIE, TYPE_SEARCH, TYPE_TV } from "../config/apiConfig";
import { err } from 'react-native-svg';


type Movie = any; // Start with any type for flexibility

export const getMovies = async (category: string): Promise<Movie[]> => {
    const url = `${BASE_URL}/${TYPE_MOVIE}/${category}?language=en-US&page=1`; 

    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`
        }
    };

    try {
        const response = await axios.get(url, options);
        
        // Assuming 'results' is the key in the response containing the movies
        return response.data.results; // Adjust based on actual API response structure
    } catch (error) {
        console.error('Error fetching movies:', error);
        throw error; // Propagate the error to be handled in fetchMovies
    }
};


export const getMoviesBySearch = async (category: string, searchTerm: string): Promise<Movie[]> => {
    const url = `${BASE_URL}/${TYPE_SEARCH}/${category}`;

    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
        },
        params: {
            query: searchTerm,
            include_adult: false,
            language: 'en-US',
            page: 1
        }
    };

    try {
        const response = await axios.get(url, options);

        // Assuming 'results' is the key in the response containing the movies
        return response.data.results; // Adjust based on actual API response structure
    } catch (error) {
        console.error(`Error fetching movies for category: ${category} and searchTerm: ${searchTerm}`, error);
        throw error; // Propagate the error to be handled in the calling function
    }
};


export const getTVShows = async (category: string): Promise<Movie[]> => {
    const url = `${BASE_URL}/${TYPE_TV}/${category}`;

    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
        },
        params: {
            language: 'en-US',
            page: 1
        }
    };

    try {
        const response = await axios.get(url, options);

        // Assuming 'results' is the key in the response containing the movies
        return response.data.results; // Adjust based on actual API response structure
    } catch (error) {
        console.error(`Error fetching TV shows for category: ${category}`, error);
        throw error; // Propagate the error to be handled in the calling function
    }
};

// https://api.themoviedb.org/3/movie/8892?language=en-US


export const getMoviesById = async (id : number): Promise<Movie> => {
    const url = `${BASE_URL}/${TYPE_MOVIE}/${id}`;

    const options = {
        headers: {
            accept: 'application/json',
            Authorization: `Bearer ${ACCESS_TOKEN_AUTH}`,
        },
        params: {
            language: 'en-US',
        }
    };

    try {
        const response = await axios.get(url, options);
        console.log(response)
        // Assuming 'results' is the key in the response containing the movies
        console.log(response)
        return response.data; // Adjust based on actual API response structure
    } catch (error) {
        console.error(`Error fetching getMoviesById: ${id}`, error);
        throw error; // Propagate the error to be handled in the calling function
    }
}