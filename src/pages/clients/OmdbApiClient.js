const API_KEY = "332307cc";

const SearchMovies = async (word) => {
  try {
    const res = await fetch(
      `http://www.omdbapi.com/?s=${word}&page=1&apikey=${API_KEY}`
    );

    return await res.json();
  } catch (error) {
    return {};
  }
};

export default SearchMovies;
