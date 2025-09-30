import axios from "axios";

const axiosInstance = axios.create({
baseURL:"https://store.mentoor.io"
})

export default axiosInstance