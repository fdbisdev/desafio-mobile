import React, { useState } from 'react';
import { Button } from '../../components/Button';
import { MovieList } from '../../components/MovieList';
import { StatusBarLight } from '../../components/StatusBarLight';

import {
  Container,
  ButtonWrapper,
} from './styles';

export default function Home() {
  const [popular, setPopular] = useState(false);
  const [upcoming, setUpcoming] = useState(true);

  const selectPopularMovies = () => {
    setUpcoming(false);
    setPopular(true);
  };

  const selectUpcomingMovies = () => {
    setPopular(false);
    setUpcoming(true);
  };

  return (
    <>
      <StatusBarLight />
      <Container>
        <ButtonWrapper>
          <Button
            onPress={selectUpcomingMovies}
            isDisabled={upcoming}
          >
            Upcoming
          </Button>
          <Button
            onPress={selectPopularMovies}
            isDisabled={popular}
          >
            Popular
          </Button>
        </ButtonWrapper>
        <MovieList />
      </Container>
    </>
  );
}
