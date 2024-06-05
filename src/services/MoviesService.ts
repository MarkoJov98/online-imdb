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

        const respone = await this.client.get("/movies");
        return respone.data;
    }
};

const movieService = new MoviesService(apiService);

export default movieService;