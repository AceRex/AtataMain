import axios from "axios";

export const BASEURL = axios.defaults.baseURL ="http://api.atata57.com";
axios.interceptors.request.use(
    config => {
        config.headers.authorization = `Bearer ${localStorage.getItem('token')}`
        return config
    },
   
)



// const GET_TOKEN = axios.create({
//     baseURL: BASEURL,
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem('token')}`
//     }
//   })

// const fetchData = useCallback(async () => {
//     try {
//       const result = await GET_TOKEN.get(`/buyers/34`)
//     }
//     catch (err) {
//       console.log(err)
//     }
//   })
