
const https = require('https');
const tls = require('tls');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;

const options = {
    key: fs.readFileSync('C:/Users/Administrator/ryans-key.pem'),
    cert: fs.readFileSync('C:/Users/Administrator/ryans-cert.pem')
  };

const server = https.createServer(options , (req,res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type','text/plain');
    res.end('Hello World');

});

server.listen(port,hostname,()=>{
    console.log(`Server running at https://${hostname}:${port}/`);
    
});