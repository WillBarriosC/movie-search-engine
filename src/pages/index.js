import Layout from "@/components/layouts/Layout";
import SearchForm from "@/components/Forms/SearchForm";
import SearchMovies from "./clients/OmdbApiClient";
import MovieCard from "@/components/movie/MovieCard";
import FilterForm from "@/components/Forms/FilterForm";
import { Grid, Text } from "@nextui-org/react";
import { useState } from "react";

export default function Home() {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState(null);

  const handleSearchMovies = async (movie) => {
    const searchResults = await SearchMovies(movie);
    if (searchResults && searchResults.Search) {
      setMovies(searchResults.Search);
      setFilteredMovies(searchResults.Search);
    } else {
      setMovies([]);
      setFilteredMovies([]);
    }
  };

  const handleFilterMovies = (searchFilterMovie) => {
    const filteredMovies = movies.filter((movie) => {
      return movie.Title.toLowerCase().includes(
        searchFilterMovie.toLowerCase()
      );
    });
    setFilteredMovies(filteredMovies);
  };

  return (
    <>
      <Layout>
        <SearchForm onSubmit={handleSearchMovies} />
        <Grid.Container gap={2}>
          {filteredMovies !== null && (
            <FilterForm onChange={handleFilterMovies} />
          )}
          {filteredMovies !== null && filteredMovies.length > 0 ? (
            filteredMovies.map((movie) => (
              <MovieCard key={movie} movie={movie} />
            ))
          ) : (
            <Grid.Container css={{ mt: "1rem" }} justify="center">
              <Text>No movies to show...</Text>
            </Grid.Container>
          )}
        </Grid.Container>
      </Layout>
    </>
  );
}
