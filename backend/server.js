const express = require('express');
const app = express();

const getBacklinks = require('./api/getBacklinks');
const { semRushApiKey } = require('./config/keys');
const port = process.env.PORT || 8000;

app.get('/api/backlinks/:domain', (req, res) => {
    const url = `https://api.semrush.com/analytics/v1/?key=${semRushApiKey}&target=${req.params.domain}&type=backlinks&target_type=root_domain&display_limit=1`
    getBacklinks(url, res);
});

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});