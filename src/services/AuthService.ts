import apiService, { ApiService } from "./ApiService";
import { AxiosInstance } from "axios";

class AuthService {
  private apiService: ApiService;
  private client: AxiosInstance;

  constructor(apiService: ApiService) {
    this.apiService = apiService;
    this.client = apiService.api;
  }
  login = async (payload: any) => {
    const response = await this.client.post("/auth/signin", payload);

    const userToken = response.data.token;
    localStorage.setItem("userToken", userToken);
    this.apiService.setAuthorizationToken(userToken);

    return response.data;
  };

  register = async (payload: any) => {
    console.log({ payload });
    const response = await this.client.post("/auth/signup", payload);

    const userToken = response.data.token;
    localStorage.setItem("userToken", userToken);
    this.apiService.setAuthorizationToken(userToken);

    return response.data;
  };

  getUserProfile = async () => {
    const response = await this.client.get("/auth/me");
    console.log({ response });

    return response.data;
  };
}
const authService = new AuthService(apiService);

export default authService;
