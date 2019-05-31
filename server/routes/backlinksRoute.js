const getBacklinks = require('../semrush-api/getBacklinks');
const { semRushApiKey } = require('../config/keys');

// Backlinks route
module.exports = (app) => {
    app.get('/api/backlinks/:domain', (req, res) => {
        const url = 'https://www.rebootonline.com/'
        getBacklinks(url, res);
    });
}