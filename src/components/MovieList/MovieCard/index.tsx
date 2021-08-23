import React, { useEffect, useState } from 'react';

import {
  Container,
  MovieBanner,
  MovieDate,
  MovieName,
  MovieDateWrapper,
} from './styles';

interface Movie {
  movieName: string;
  movieDate: string;
  movieBanner: string;
}

export function MovieCard({ movieName, movieDate, movieBanner }: Movie) {
  const [dateFormatted, setDateFormatted] = useState(movieDate);

  function formatDate() {
    const dateSplit = movieDate.split('-');
    setDateFormatted(`${dateSplit[2]}/${dateSplit[1]}/${dateSplit[0]}`);
  }

  useEffect(() => {
    formatDate();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Container>
      <MovieBanner source={{ uri: movieBanner }}>
        <MovieDateWrapper>
          <MovieDate>
            {dateFormatted}
          </MovieDate>
        </MovieDateWrapper>

      </MovieBanner>
      <MovieName>
        {movieName}
      </MovieName>
    </Container>
  );
}
