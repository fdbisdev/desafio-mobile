/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList } from 'react-native';
import { getPopularMovies, getUpcomingMovies } from '../../services/api';

import { MovieCard } from './MovieCard';

import {
  Container,
} from './styles';

interface MovieListProps {
  popular: boolean;
  upcoming: boolean;
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
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  voteAvarage: number;
  voteCount: number;
}

export function MovieList({ popular, upcoming }: MovieListProps) {
  const [upcomingMoviesList, setUpcomingMoviesList] = useState();
  const [popularMoviesList, setPopularMoviesList] = useState();
  const [loading, setLoading] = useState(true);

  const getMovieBannerBaseURL = 'https://image.tmdb.org/t/p/w500/';

  async function getMovieList() {
    const popularMoviesResponse: any = await getPopularMovies();
    setPopularMoviesList(popularMoviesResponse.data.results);

    const upcomingMoviesResponse: any = await getUpcomingMovies();
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
        movieId={item.id}
      />
    );
  }

  return (
    <Container>
      {
        popular && !upcoming
          ? (
            <FlatList
              data={popularMoviesList}
              keyExtractor={(item) => String(item.id)}
              numColumns={3}
              renderItem={CardList}
            />
          )
          : (
            <FlatList
              data={upcomingMoviesList}
              numColumns={3}
              keyExtractor={(item) => String(item.id)}
              renderItem={CardList}
            />
          )
      }
    </Container>
  );
}
