const API_KEY = process.env.REACT_APP_API_KEY;

const requests = {
  fetchWeeklyTreanding: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchTrending: `/discover/tv?api_key=${API_KEY}&with_network=213`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomancesMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentsMovies: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
};
export default requests;
