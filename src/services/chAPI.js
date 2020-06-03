import axios from "axios";

const api = axios.create({
    baseURL: "https://pkchemistry.herokuapp.com/ch"
});

export default api;