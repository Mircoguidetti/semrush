const axios = require('axios');

const getBacklinks = (url, res) => {
    axios.get(url)
        .then((resposne) => {
            console.log(resposne.data)
            if (resposne.data === 'Validation Error : target') {
                const data = {
                    status: 'ok',
                    code: 403,
                    backlinks:'Validation error. Wrong API Key'
                };
                return res.send(JSON.stringify(data));
            } 
            const data = {
                status: 'ok',
                code: 200,
                backlinks:resposne.data
            };
            return res.send(JSON.stringify(data));
        })
        .catch((error) => {
            
            if (error.code === 'ENOTFOUND') {
                const data = {
                    status: 'error',
                    'message': 'Network error. Check your connection and the domain '
                };
                return res.send(JSON.stringify(data))
            } 
        });
};

module.exports = getBacklinks;