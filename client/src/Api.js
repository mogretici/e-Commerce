import axios from "axios";
axios.interceptors.request.use(function (config) {
    const {origin} = new URL(config.url);
    const allowedOrigin = [process.env.REACT_APP_BASE_ENDPOINT];
    const token = localStorage.getItem("access-token");

    if (allowedOrigin.includes(origin) && token) {
        config.headers.authorization = token;
    }

    return config;
  }, function (error) {
    return Promise.reject(error);
  });

  

export const fetchRegister = async (input) => {
  
        const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/register`, input);
        return data;
    }

export const fetchMe = async () => {
    
    const { data } = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/me`);
    return data;
    
}

export const fetchLogout = async () => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/logout`,
    {
        refresh_token: localStorage.getItem("refresh-token"),
     }
     );
    
    return data;
}

export const fetchLogin = async (input) => {
    const { data } = await axios.post(`${process.env.REACT_APP_BASE_ENDPOINT}/auth/login`, input);
    return data;
}