const axios = require('axios')

async function api(){
    const apiResponse = await axios.get(`https://api.github.com/users/${github_username}`);
    return apiResponse;
}


module.exports = api;