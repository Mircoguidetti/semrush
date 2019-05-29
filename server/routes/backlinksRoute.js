const getBacklinks = require('../semrush-api/getBacklinks');
const { semRushApiKey } = require('../config/keys');

// Backlinks route
module.exports = (app) => {
    app.get('/api/backlinks/:domain', (req, res) => {
        // const url = `https://api.semrush.com/analytics/v1/?key=${semRushApiKey}&target=${req.params.domain}&type=backlinks&target_type=root_domain&display_limit=1`;
        const url = 'https://www.rebootonline.com/'
        getBacklinks(url, res);
    });
}