import axios from "axios"
const baseUrl = "http://localhost:3001/persons"

const getAll = () => {
    return axios.get(baseUrl)
        .then(response => {
     
            return response.data;
        })
        .catch(err => {
            alert("Something wrong");
            console.log(err);
            throw err;
        });
}
const create = (newPerson) => {
    return axios.post(baseUrl, newPerson)
        .then(response => {
            alert("!New number added!");
            console.log(response);
            return response.data;
        })
        .catch(err => {
            alert("Something wrong");
            console.log(err);
            throw err;
        });
}
const deleteById = (id) => {
    return axios.delete(`http://localhost:3001/persons/${id}`)
        .then(response => {
            alert("!Number has been deleted!");
            console.log(response);
            return response.data;
        })
        .catch(err => {
            alert("Something wrong");
            console.log(err);
            throw err;
        });
}
export default {
    getAll,
    create,
    deleteById
}
