const path = require('path');
const express = require('express');
const app = express();
const backlinksRoute  = require('./routes/backlinksRoute');
const organicKeywordsRoute = require('./routes/organicKeywordsRoute');
const indexRoute = require('./routes/indexRoute');
const databasesRoute = require('./routes/databasesRoute');
const port = process.env.PORT || 8000;
const publicPath = path.join(__dirname, '..', 'client', 'public');

app.use(express.static(publicPath));

// require routes
databasesRoute(app);
organicKeywordsRoute(app);
backlinksRoute(app);
indexRoute(app);

// run server
app.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});