import axios, { AxiosInstance } from "axios";

export class ApiService {
  public api: AxiosInstance;

  constructor() {
    const headers: Record<string, string> = {};
    
    const userToken = localStorage.getItem("userToken")
      ? localStorage.getItem("userToken")
      : null;

    if (userToken) {
      headers["Authorization"] = `Bearer ${userToken}`;
    }

    this.api = axios.create({
      baseURL: "https://vivifyacademy-movie-api.vivifyideas.com/api",
      headers: headers,
    });
  }

  setAuthorizationToken = (token: string) => {
    this.api.defaults.headers["Authorization"] = `Bearer ${token}`;
  };
}
const apiService = new ApiService();

export default apiService;
