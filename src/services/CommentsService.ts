import apiService, {ApiService} from "./ApiService";
import { AxiosInstance } from "axios";

class CommentsService {
    private apiService: ApiService;
    private client: AxiosInstance;

    constructor(apiService: ApiService) {
        this.apiService = apiService;
        this.client = apiService.api;
    };
    getComments = async(movieId: number) => {
        const response = await this.client.get(`/comments/${movieId}?take=10&skip=0`);
        return response.data;
    };
    postComment = async (postData: any) => {
        const response = await this.client.post("comments", postData);
        return response.data;
    };
    deleteComment = async (commentId: number) => {
        const response = await this.client.delete(`/comments/${commentId}`);
        return response.data;
    };
}

const commentsService = new CommentsService(apiService);

export default commentsService;

