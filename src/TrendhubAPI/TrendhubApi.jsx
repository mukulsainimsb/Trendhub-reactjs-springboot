import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8081',
});

// Set up interceptor to include JWT token if present
axiosInstance.interceptors.request.use(
    (config) => {
        const user = getCurrentUser();
        if (user && user.jwtToken) {
            config.headers.Authorization = 'Bearer ' + user.jwtToken;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Login API
export const loginapi = async (username, password) => {
    try {
        const response = await axiosInstance.post('/authenticate', { username, password });
        if (response.data) {
            localStorage.setItem("user", JSON.stringify(response.data));
        }
        return response;
    } catch (error) {
        console.error("Login failed:", error);
        throw error;
    }
};

// Logout API
export const logout = () => {
    localStorage.removeItem("user");
};

// Retrieve current user
export const getCurrentUser = () => {
    return JSON.parse(localStorage.getItem("user"));
};


// Product and user APIs
export const retrieveAllProducts = () => axiosInstance.get('/get-all-products');
export const userRegisterApiCall = (data) => axiosInstance.post('/save-user', data);
export const getUserByEmail = (email) => axiosInstance.get(`/get-user-by-email/${email}`);

export default axiosInstance;
