import config, { nodeEnv, logStars } from  './config';
//import https from 'https';
import http from 'http';


/* Dev/testing code */
/*console.log(config, nodeEnv);
logStars('Function');

https.get('https://www.christophermarcotte.com', res => {
    console.log('Response status code: ', res.statusCode);

    res.on('data', chunk => {
        console.log(chunk.toString());
    })
})*/

const server = http.createServer((req, res) => {
    res.write('Hello HTTP!\n');
    setTimeout(() => {
        res.write('I can stream!\n');
        res.end();
    }, 3000)
})

server.listen(8080);