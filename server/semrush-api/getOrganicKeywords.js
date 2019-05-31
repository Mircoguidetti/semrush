const axios = require('axios');
const formatApiResponse = require('../utils/formatApiResponse');

const getOrganicKeywords = (url, res) => {
    axios.get(url)
        .then((resposne) => {
            if (resposne.data === 'Validation Error : target') {
                const data = {
                    status: 'ok',
                    code: 403,
                    keywords:'Validation error. Wrong API Key'
                };
                return res.send(JSON.stringify(data));
            }

            const formatattedApiResponse =  formatApiResponse(resposne.data);
            // console.log(formatattedApiResponse)
            const data = {
                status: 'ok',
                code: 200,
                keywords:formatattedApiResponse
            };
            
            
            return res.send(JSON.stringify(data));
        })
        .catch((error) => {
            
            if (error.code === 'ENOTFOUND') {
                const data = {
                    status: 'error',
                    'message': 'Network error. Check your connection and the domain'
                };
                return res.send(JSON.stringify(data))
            } 
        });
};

module.exports = getOrganicKeywords;