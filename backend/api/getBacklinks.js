const axios = require('axios');

const getBacklinks = (url, res) => {
    axios.get(url)
        .then((resposne) => {
            const data = {
                status: 'ok',
                backlinks:resposne.data
            };
            return res.send(JSON.stringify(data));
        })
        .catch((error) => {
            const data = {
                status: 'error',
                code: error.code
            }
            return res.send(JSON.stringify(data))
        });
};

module.exports = getBacklinks;