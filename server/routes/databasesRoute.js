const path = require('path');
const databases = require('../semrush-api/databases');


// Index route
module.exports = (app) => {
    app.get('/api/databases/', (req, res) => {
        const data = {
            databases:databases
        }
        res.send(JSON.stringify(data));
    })
};