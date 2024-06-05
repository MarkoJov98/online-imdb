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

interface MovieList {
  data: Movie[];
}
