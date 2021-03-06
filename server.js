const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 8080;
const app = express();

app.use(express.static(__dirname));
app.use(express.static(path.join(__dirname, 'build')));

// For Production

// app.get('/*', function (req, res) {
//     res.sendFile(path.join(__dirname, 'build', 'index.html'));
// });

// Replace the start script in package.json when in production
// "start": "node server.js",

app.get('/*', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, function () {
    console.log(`App listening on: ${PORT}`)
});
