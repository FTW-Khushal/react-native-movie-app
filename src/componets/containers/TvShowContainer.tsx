import { Box, Text } from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { getTVShows } from "../services/api";
import Selection from "../froms/Selection";
import Loading from "../layout/Loading";
import MoviesList from "../list/MoviesList";

interface TvShowContainerProps {
    navigation: any; // or type it properly if needed
  }

  const options = [
    { label: "Airing Today", value: "airing_today", isSelected: true },
    { label: "On The Air", value: "on_the_air" },
    { label: "Popular", value: "popular" },
    { label: "Top Rated", value: "top_rated" },
    
  ];

const TvShowContainer : React.FC<TvShowContainerProps> = ({ navigation }) => {
    const [selectedValue, setSelectedValue] = useState<string>("airing_today");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [movies, setMovies] = useState<any[]>([]);

  useEffect(() => {
    const fetchMovies = (category: string): void => {
      setIsLoading(true);

      getTVShows(category)
        .then((movies) => {
          setMovies(movies); 
          setIsLoading(false); 
        })
        .catch((error) => {
          alert(`Error: Something went wrong! ${error}`);
          setIsLoading(false); 
        });
    };

    fetchMovies(selectedValue); 
  }, [selectedValue]);

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
}

export default TvShowContainer;