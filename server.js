import config from './config';

import fs from 'fs';
import express from 'express';

const server = express();

server.get('/', (req, res) => {
    res.send('Hello Express');
});

// Simple Method, express will take care of serving content under public directory
server.use(express.static('public'));

// For reference, below method serves pages individually
/*
server.get('/about.html', (req, res) => {
    fs.readFile('./public/about.html', (err, data) => {
        res.send(data.toString());
    });
});
*/

server.listen(config.port, () => {
    console.info('Express listening on port ', config.port);
});