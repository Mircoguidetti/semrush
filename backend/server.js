const path = require('path');
const express = require('express');
const app = express();
const backlinksRoute  = require('./routes/backlinksRoute');
const indexRoute = require('./routes/indexRoute');
const port = process.env.PORT || 8000;
const publicPath = path.join(__dirname, '..', 'client', 'public')

app.use(express.static(publicPath))

// routes
backlinksRoute(app);
indexRoute(app)

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});