import axios from "axios"
const baseUrl = "https://fullstackopen-course-p0tr.onrender.com/api/persons"

const getAll = () => {
    return axios.get(baseUrl)
        .then(response => {
     
            return response.data;
        })
        .catch(err => {
            console.log(err);
            throw err.response.data;
        });
}
const create = (newPerson) => {
    return axios.post(baseUrl, newPerson)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(err => {
            console.log(err);
            throw err.response.data;
        });
}
const deleteById = (id) => {
    return axios.delete(`${baseUrl}/${id}`)
        .then(response => {
            console.log(response);
            return response.data;
        })
        .catch(err => {
            console.log(err);
            throw err.response.data;
        });
}
export default {
    getAll,
    create,
    deleteById
}
