import axios from "axios";

let apiUrl = "http://localhost:3000/api/user/"

let signup = async (request_data) => {
    return await axios.post(`${apiUrl}signup`, request_data)
}
let signin = async (request_data) => {
    return await axios.post(`${apiUrl}signin`, request_data)
}
let getUserByEmail = async (token) => {
    return await axios.get(`${apiUrl}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
};

export {signup, signin, getUserByEmail}