/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useState } from 'react';

import { ActivityIndicator } from 'react-native';

import { useNavigation } from '@react-navigation/native';

import {
  Container,
  MovieBannerLarge,
  MovieInfoWrapper,
  MovieName,
  MovieDate,
  MovieDetailsWrapper,
  MovieDuration,
  MovieGenre,
  MovieWrapper,
  MovieCastWrapper,
  MovieDescriptionSeparator,
  MovieDescriptionWrapper,
  MovieDescriptionText,
  MovieBannerWrapper,
  BackButton,
  BackButtonWrappper,
  MovieBannerEffect,
} from './styles';

import { getMovieDetails } from '../../services/api';

interface Movie {
  movieId: number;
  movieName: string;
  movieDate: string;
  movieBanner: string;
}

interface MovieGenresProp {
  id: number;
  name: string;
}

interface MovieInfoProps {
  runtime: number;
  genres: Array<MovieGenresProp>;
  overview: string;
}

const MovieInfoInitialValue: MovieInfoProps = {
  runtime: 0,
  genres: [],
  overview: '',
};

export default function MovieDetails({
  movieName, movieDate, movieId, movieBanner,
}: Movie) {
  const [movieInfo, setMovieInfo] = useState<MovieInfoProps>(MovieInfoInitialValue);
  const [releaseYear, setReleaseYear] = useState('');
  const [loading, setLoading] = useState(true);

  const navigation = useNavigation();

  function formateMovieYear() {
    const splitDate = movieDate.split('-');
    setReleaseYear(splitDate[0]);
  }

  function handleReturnHome() {
    navigation.goBack();
  }

  async function getMovieInfo() {
    const movieDetailsData: any = await getMovieDetails(movieId);
    setMovieInfo(movieDetailsData.data);
    setLoading(false);
  }

  useEffect(() => {
    getMovieInfo();
    formateMovieYear();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (<ActivityIndicator />)
        : (
          <Container>
            <BackButtonWrappper onPress={handleReturnHome}>
              <BackButton />
            </BackButtonWrappper>
            <MovieBannerWrapper>
              <MovieBannerEffect colors={['black', 'transparent']} />
              <MovieBannerLarge source={{ uri: movieBanner }} />
            </MovieBannerWrapper>
            <MovieWrapper>
              <MovieInfoWrapper>
                <MovieName>
                  {movieName}
                  {' '}
                </MovieName>
                <MovieDate>{releaseYear}</MovieDate>
              </MovieInfoWrapper>
              <MovieDetailsWrapper>
                <MovieDuration>
                  {movieInfo.runtime}
                  m |
                  {' '}

                </MovieDuration>
                {movieInfo.genres.map((genre, i: number) => (
                  <MovieGenre key={genre.id}>

                    {(i + 1 < movieInfo.genres.length) ? `${genre.name}, ` : `${genre.name}`}

                  </MovieGenre>
                ))}
              </MovieDetailsWrapper>
            </MovieWrapper>
            <MovieCastWrapper />
            <MovieDescriptionWrapper>
              <MovieDescriptionSeparator />
              <MovieDescriptionText>
                {movieInfo.overview}
              </MovieDescriptionText>
            </MovieDescriptionWrapper>
          </Container>
        )}
    </>
  );
}
