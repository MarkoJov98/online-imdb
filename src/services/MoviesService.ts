import apiService, {ApiService} from "./ApiService"
import { AxiosInstance } from "axios"

class MoviesService {
    private apiService: ApiService;
    private client: AxiosInstance;
    
    constructor(apiService: ApiService) {
        this.apiService = apiService;
        this.client = apiService.api;
    }
    getMovies = async () => {

        const response = await this.client.get("/movies");
        return response.data;
    };
    getSingleMovie = async (movieId: number) => {
        const response = await this.client.get(`movies/${movieId}`)
        return response.data;
    };
    createMovie = async (movieData: any) => {
        const response = await this.client.post("/movies", movieData);
        return response.data;
    };
    getGenres = async () => {
        const response = await this.client.get("/genres");
        return response.data;
    };
    deleteMovie = async (movieId: number) => {
        const response = await this.client.delete(`movies/${movieId}`);
        return response.data;
    };
    editMovie = async (moviesId: number, movieData: MovieData) => {
        const response = await this.client.put(`/movies/${moviesId}`, movieData);
        return response.data;
    };

    paginateMovies = async (take: number, skip: number) => {
        
        const response = await this.client.get(`https://vivifyacademy-movie-api.vivifyideas.com/api/movies?take=${take}&skip=${skip}`);
        return response.data;
    };
};

const movieService = new MoviesService(apiService);

export default movieService;