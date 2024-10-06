import React, { useEffect, useState } from "react";
import {
  Box,
  Center,
  ToastDescription,
  ToastTitle,
} from "@gluestack-ui/themed";
import Selection from "../froms/Selection";
import { useToast, Toast } from "@gluestack-ui/themed";
import { VStack } from "@gluestack-ui/themed";
import { ToastAndroid } from "react-native";
import { getMovies } from "../services/api";
import Loading from "../layout/Loading";
import MoviesList from "../list/MoviesList";

// Add navigation to props interface if needed
interface MoviesContainerProps {
    navigation: any; // or type it properly if needed
  }

// Define the options
const options = [
  { label: "Now Playing", value: "now_playing", isSelected: true },
  { label: "Popular", value: "popular" },
  { label: "Top Rated", value: "top_rated" },
  { label: "Upcoming", value: "upcoming" },
  
];

const MoviesContainer: React.FC<MoviesContainerProps> = ({ navigation }) => {
  const [selectedValue, setSelectedValue] = useState<string>("now_playing");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<any[]>([]);

  // Fetch movies whenever selectedValue changes
  useEffect(() => {
    const fetchMovies = (category: string): void => {
      setIsLoading(true); // Set loading state

      getMovies(category)
        .then((movies) => {
          setMovies(movies); // Set movies state
          setIsLoading(false); // Reset loading state
        })
        .catch((error) => {
          alert(`Error: Something went wrong! ${error}`);
          setIsLoading(false); // Reset loading state on error
        });
    };

    fetchMovies(selectedValue); // Fetch movies on initial render and when selectedValue changes
  }, [selectedValue]); // Dependency array

  const handleSelectionChange = (value: string) => {
    setSelectedValue(value); // Update selected value
  };

  return (
    <Box height="100%">
      <Box py={32} px={32}>
      <Selection
        options={options}
        selectedValue={selectedValue}
        onValueChange={handleSelectionChange}
      />
      </Box>

      {isLoading ? <Loading /> : <MoviesList navigation={navigation} movies={movies} />}
    </Box>
  );
};

export default MoviesContainer;
