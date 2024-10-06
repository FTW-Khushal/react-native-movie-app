import { FlatList } from "@gluestack-ui/themed";
import MoviesCard from "../listItem/MoviesCard";

interface MoviesListProps {
    movies: any[]; // Using any[] for movies, but it's better to define a specific type
    navigation: any; // or type it properly if needed
}

const MoviesList: React.FC<MoviesListProps> = ({ movies, navigation }) => {
        return(
            <FlatList data={movies} 
                renderItem={({ item }: { item: any }) => (
                    <MoviesCard navigation={navigation} image={item.poster_path} title={item.title} popularity={item.popularity} releaseDate={item.release_date}  id={item.id} />
                )}/>
        )
}

export default MoviesList;