const getOrganicKeywords = require('../semrush-api/getOrganicKeywords');
const getApiEndpoint = require('../config/semrush/semrush-api-endpoints');

// Organic keywords route
module.exports = (app) => {
    app.get('/api/organic-keywords/', (req, res) => {
        const domain = req.query.domain;
        const database = req.query.database;
        const url = getApiEndpoint('organic-keywords',domain, database);
        
        getOrganicKeywords(url, res);
    });
};