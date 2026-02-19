import { environment } from "../../environment/environment.prod";

const BASE_URL = environment.apiBaseUrl;

export const API_ENDPOINTS = {

  user:{

    add: `${BASE_URL}/user/add`,

  }


}
