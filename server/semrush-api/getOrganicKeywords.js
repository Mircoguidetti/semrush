const axios = require('axios');
const formatApiResponse = require('../utils/formatApiResponse');

const getOrganicKeywords = (url, res) => {
    axios.get(url)
        .then((response) => {
           console.log(response.data)
            if (response.data.trim() === 'ERROR 50 :: NOTHING FOUND') {
                const data = {
                    status: 'error',
                    code: 50,
                    message:'Not found, please type a valid domain!'
                };
                return res.send(JSON.stringify(data));
            }

            const formatattedApiResponse = formatApiResponse(response.data);
            const data = {
                status: 'ok',
                code: 200,
                keywords:formatattedApiResponse
            };
            return res.send(JSON.stringify(data));
        })
        .catch((error) => {
            const typeError = error.response.data.trim();
            const data = {
                status: 'error',
                code: '',
                message: ''
            }
            switch(typeError) {
                case 'ERROR 50 :: NOTHING FOUND':
                    data['code'] = '50';
                    data['message'] = 'Domain not found. Please type a valid domain !';
                    return res.send(JSON.stringify(data));
                case 'ERROR 120 :: WRONG KEY - ID PAIR':
                    data['code'] = '120';
                    data['message'] = 'Wrong API Key';
                    return res.send(JSON.stringify(data));
            }
            
            // if (error.code === 'ENOTFOUND') {
            //     const data = {
            //         status: 'error',
            //         'message': 'Network error. Check your connection and the domain'
            //     };
            //     return res.send(JSON.stringify(data))
            // } 
        });
};

module.exports = getOrganicKeywords;