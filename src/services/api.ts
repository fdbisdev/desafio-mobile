import axios from 'axios';

export const apiKey = '80339999c7adcf8c450b64708612e07d';

export async function getPopularMovies() {
  const gepPopularMoviesURL = 'https://api.themoviedb.org/3/movie/popular?api_key=80339999c7adcf8c450b64708612e07d&language=pt-BR&page=1';
  try {
    const getPopularMoviesResponse = await axios.get(gepPopularMoviesURL);
    return getPopularMoviesResponse;
  } catch (error) {
    return error;
  }
}

export async function getUpcomingMovies() {
  const getUpcomingMoviesURL = 'https://api.themoviedb.org/3/movie/upcoming?api_key=80339999c7adcf8c450b64708612e07d&language=pt-BR&page=1';

  try {
    const getUpcomingMoviesResponse = await axios.get(getUpcomingMoviesURL);
    return getUpcomingMoviesResponse;
  } catch (error) {
    return error;
  }
}

export async function getMovieDetails(movieId: number) {
  const getMovieDetailsURL = `
  https://api.themoviedb.org/3/movie/${movieId}?api_key=80339999c7adcf8c450b64708612e07d&language=pt-BR`;

  try {
    const getMovieDetailsResponse = await axios.get(getMovieDetailsURL);
    return getMovieDetailsResponse;
  } catch (error) {
    return error;
  }
}

export async function getMovieCast(movieId: number) {
  const getMovieCastURL = `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=80339999c7adcf8c450b64708612e07d&language=pt-BR`;
  try {
    const getMovieDetailsResponse = await axios.get(getMovieCastURL);
    return getMovieDetailsResponse;
  } catch (error) {
    return error;
  }
}
