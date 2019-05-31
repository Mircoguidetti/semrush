const databases = require('../config/semrush/databases');

// Index route
module.exports = (app) => {
    app.get('/api/databases/', (req, res) => {
        const data = {
            databases:databases
        }
        res.send(JSON.stringify(data));
    })
};