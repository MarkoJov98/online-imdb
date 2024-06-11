interface User {
  id?: string;
  name: string;
  email: string;
  password: string;
  confirmPassword?: string;
}
interface Genre {
  id: number;
  name: string;
}
interface Director {
  id: number;
  name: string;
  surname: string;
  date_of_birth: string;
  image: string;
  creator_id: number;
  movies: Movie[];
}

interface Movie {
  id: number;
  title: string;
  user_score: number;
  image: string;
  director: Director;
  genres: Genre[];
  creator_id: number;
}

interface Person {
  id: number;
  name: string;
  surname?: string;
}

interface SingleMovie {
  id: number;
  title: string;
  release_date: string;
  user_score: number;
  description: string;
  image: string;
  trailer: string;
  duration: string;
  creator_id: number;
  director_id: number;
  genres: Genre[];
  creator: Person;
  director: Person;
}

interface Option {
  label: string;
  value: string | number; // Tip može biti string ili broj u zavisnosti od toga koji tip koristi vaša aplikacija
};

interface MovieData {
  title: string;
  release_date: string;
  user_score: number;
  description: string;
  image: string;
  trailer: string;
  duration: string;
  genres: number[];  // Assuming genres are an array of IDs
  director: number;
};

interface DirectorData {
  name: string;
  surname: string;
  date_of_birth: string;
  image: string;
};
interface Creator {
  id: number;
  name: string;
  email: string;
}

interface Comment {
  id: number;
  body: string;
  creator: Creator,
}

interface PostData {
  body: string,
  movie_id: number
}
interface EditMovie {
  movieId: number,
  movieData: MovieData
}