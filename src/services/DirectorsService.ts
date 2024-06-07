import apiService, {ApiService} from "./ApiService";
import { AxiosInstance } from "axios";

class DirectorsService {
    private apiService: ApiService;
    private client: AxiosInstance;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
        this.client = apiService.api;
    }
    getDirectors = async () => {
        const response = await this.client.get("/directors");
        return response.data;
    };
    getSingleDirector = async (directorId: number) => {
        const response = await this.client.get(`directors/${directorId}`);
        return response.data;
    }
}


const directorsService = new DirectorsService(apiService);

export default directorsService;