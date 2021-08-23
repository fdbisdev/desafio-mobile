import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { getPopularMovies, getUpcomingMovies, getMovieBanner } from '../../services/api';

import { MovieCard } from './MovieCard';

import {
  Container,
} from './styles';

interface MovieListProps {
  popular: boolean;
}

interface MovieArrayListProps {
  adult: boolean;
  backdropPath: string;
  genreIds: string[];
  id: number;
  originalLanguage: string;
  originalTitle: string;
  overview: string;
  popularity: number;
  posterPath: string;
  releaseDate: string;
  title: string;
  video: boolean;
  voteAvarage: number;
  voteCount: number;
}

export function MovieList({ popular }: MovieListProps) {
  const [upcomingMoviesList, setUpcomingMoviesList] = useState();
  const [popularMoviesList, setPopularMoviesList] = useState();
  const [loading, setLoading] = useState(true);

  const getMovieBannerBaseURL = 'https://image.tmdb.org/t/p/w500/';

  async function getMovieList() {
    const popularMoviesResponse = await getPopularMovies();
    setPopularMoviesList(popularMoviesResponse.data.results);

    const upcomingMoviesResponse = await getUpcomingMovies();
    setUpcomingMoviesList(upcomingMoviesResponse.data.results);

    setLoading(false);
  }

  useEffect(() => {
    getMovieList();
  }, []);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#fff" />
      </Container>
    );
  }

  function CardList({ item }: { item: MovieArrayListProps }) {
    return (
      <MovieCard
        movieBanner={getMovieBannerBaseURL + item.poster_path}
        movieDate={item.release_date}
        movieName={item.title}
      />
    );
  }

  return (
    <Container>
      {
        popular
          ? (
            <FlatList
              data={popularMoviesList}
              keyExtractor={(item) => item.id.toString()}
              numColumns={3}
              renderItem={CardList}
            />
          )
          : (
            <FlatList
              data={upcomingMoviesList}
              numColumns={3}
              keyExtractor={(item) => item.id.toString()}
              renderItem={CardList}
            />
          )
      }
    </Container>
  );
}
