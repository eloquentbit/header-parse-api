const express = require('express');

const app = express();

app.get('/', function(req, res) {
    console.log(JSON.stringify(req.headers));
    const ip = req.headers['x-forwarded-for'];
    const language = req.headers['accept-language'].split(',')[0];
    const re = /(?!\()[^()]*(?=\))/;
    const software = req.headers['user-agent'].match(re)[0];
    res.json({
        ip: ip, 
        language: language,
        software: software
    }); 
});

app.listen('8080', function() {
    console.log('Header Parse App listening on port 8080');
});