import { environment } from "../../environment/environment.prod";

const BASE_URL = environment.apiBaseUrl;

export const API_ENDPOINTS = {

  user:{

    add: `${BASE_URL}/user/add`,
    get: `${BASE_URL}/user/get/`

  },

  transaction: {

    add: `${BASE_URL}/transaction/add/`,  
    getAll: `${BASE_URL}/transaction/user/`

  },



}
