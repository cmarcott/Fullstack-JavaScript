import config from './config';
import apiRouter from './api';
import sassMiddleware from 'node-sass-middleware';
import path from 'path';

import express from 'express';

const server = express();

server.use(sassMiddleware({
    src: path.join(__dirname, 'sass'),
    dest: path.join(__dirname, 'public')
}));

server.set('view engine', 'ejs');

import serverRender from './serverRender';

server.get('/', (req, res) => {
    serverRender()
        .then(content => {
            res.render('index', {
                content
            });
        })
        .catch(console.error);
});

// Simple Method, express will take care of serving content under public directory
server.use(express.static('public'));
server.use('/api', apiRouter);

server.listen(config.port, config.host, () => {
    console.info('Express listening on port ', config.port);
});