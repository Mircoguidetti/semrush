const getOrganicKeywords = require('../semrush-api/getOrganicKeywords');
const getUrls = require('../config/urls');

// Backlinks route
module.exports = (app) => {
    app.get('/api/organic-keywords/', (req, res) => {
        const url = getUrls('organic-keywords',req.query.domain, req.query.database)
        // const url = 'https://www.rebootonline.com/'
        
        getOrganicKeywords(url, res);
    });
}