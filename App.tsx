import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import MovieDetails from './src/pages/MovieDetails';

type StackParamList = {
  MovieDetails: {
    movieId: number;
    movieName: string;
    movieDate: string;
    movieBanner: string;
  }
  HomeScreen: undefined;
}

type MovieDetailsProps = NativeStackScreenProps<StackParamList, 'MovieDetails'>;

function HomeScreen() {
  return <Home />;
}

function MovieDetailsScreen({ route }: MovieDetailsProps) {
  return (
    <MovieDetails
      movieName={route.params.movieName}
      movieDate={route.params.movieDate}
      movieId={route.params.movieId}
      movieBanner={route.params.movieBanner}
    />
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="MovieDetails" component={MovieDetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
