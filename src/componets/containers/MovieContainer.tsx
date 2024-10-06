import {
  Center,
  HStack,
  Text,
  VStack,
  Box,
  Spinner,
  Image,
} from "@gluestack-ui/themed";
import { useEffect, useState } from "react";
import { getMoviesById } from "../services/api";
import Loading from "../layout/Loading";

interface MovieContainerProps {
  navigation: any;
  route: any;
}

const MovieContainer: React.FC<MovieContainerProps> = ({
  navigation,
  route,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [movie, setMovie] = useState<any>(null);
  const { id } = route.params;

  useEffect(() => {
    const fetchMovieById = async (id: number): Promise<void> => {
      getMoviesById(id)
        .then((movie) => {
          setMovie(movie);
          navigation.setOptions({
            title: `${movie.title}`, // Customize this title as needed
          });
          setIsLoading(false);
        })
        .catch((error) => {
          alert(`Error: Something went wrong! ${error}`);
          setMovie(null);

          setIsLoading(false);
        });
    };

    fetchMovieById(id);
  }, [id]);

  if (isLoading) {
    return (
      <Center flex={1}>
        <Loading />
      </Center>
    );
  }

  return (
    <Box
      p={32}
      borderRadius="$md"
      bg="gray.100" // Light gray background
      my={4} // Vertical margin
    >
      <VStack space={"sm"} alignItems="center">
        <Text fontSize="$2xl" fontWeight="bold" color="gray.800">
          {movie.title}
        </Text>

        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/original/${movie.poster_path}`,
          }}
          alt={movie.title}
          resizeMode="contain"
          style={{ height: "50%", width: "100%", borderRadius: 8 }}// Limit image height and add rounded corners
        />

        <Text fontSize="$md" color="gray.600">
          {movie.overview}
        </Text>

        <HStack space={"sm"} mt={2}>
          <Text>
            Popularity: <Text fontWeight="bold">{movie.popularity}</Text>
          </Text>
          <Text>|</Text>
          <Text>
            Release Date: <Text fontWeight="bold">{movie.release_date}</Text>
          </Text>
        </HStack>
      </VStack>
    </Box>
  );
};

export default MovieContainer;
