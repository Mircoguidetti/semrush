const express = require('express');
const app = express();
const backlinksRoute  = require('./routes/backlinksRoute');
const port = process.env.PORT || 8000;

// routes
backlinksRoute(app);

app.listen(port, () => {
    console.log(`Server is up on port ${port}`)
});