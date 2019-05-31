const path = require('path');
const publicPath = path.join(__dirname, '../..', 'client', 'public');

// Index route
module.exports = (app) => {
    app.get('*', (req, res) => {
        res.sendFile(path.join(publicPath, 'index.html'))
    });
};