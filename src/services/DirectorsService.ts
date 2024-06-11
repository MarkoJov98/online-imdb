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
    };
    createDirector = async (directorData: any) => {
        const response = await this.client.post("/directors", directorData);
        return response.data;
    };
    deleteDirector = async (directorId: number) => {
        const response = await this.client.delete(`/directors/${directorId}`);
        return response.data;
    };
    paginateDirectors = async (take: number, skip: number) => {
        const response = await this.client.get(`/directors?take=${take}&skip=${skip}`);
        return response.data;
    };
};



const directorsService = new DirectorsService(apiService);

export default directorsService;