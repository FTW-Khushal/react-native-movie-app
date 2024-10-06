import { Box, Center, Text } from "@gluestack-ui/themed";
import Form from "../froms/Froms";
import { useState } from "react";
import { getMoviesBySearch } from "../services/api";
import Loading from "../layout/Loading";
import MoviesList from "../list/MoviesList";

interface SearchResultContainerProps {
  navigation: any; // or type it properly if needed
}

const options = [
  { label: "Movie", value: "movie" },
  { label: "Multi", value: "multi", isSelected: true }, // Default selected
  { label: "TV", value: "tv" },
];

const SearchResultContainer: React.FC<SearchResultContainerProps> = ({
  navigation,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [movies, setMovies] = useState<any[]>([]);

  const handleFormSubmit = (searchTerm: string, selectedValue: string) => {
    console.log("Search Term:", searchTerm);
    console.log("Selected Type:", selectedValue);

    getMoviesBySearch(selectedValue, searchTerm)
      .then((movies) => {
        setMovies(movies);
        setIsLoading(false);
      })
      .catch((error) => {
        alert(`Error: Something went wrong! ${error}`);
        setIsLoading(false); // Reset loading state on error
      });
  };

  return (
    <Box px={4} height="100%">
      <Form
        options={options}
        onSubmit={handleFormSubmit} // Pass the callback to the Form
      />
      {isLoading ? (
        <Loading />
      ) : (
        <MoviesList navigation={navigation} movies={movies} />
      )}
    </Box>
  );
};

export default SearchResultContainer;
