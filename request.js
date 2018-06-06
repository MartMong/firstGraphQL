const axios = require('axios');

var getUser = id => {
    return axios.get(`http://localhost:3000/users/${id}`)
        // .then(resp => resp.data);
}

module.exports ={
    getUser
}