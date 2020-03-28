const https = require('https'); //导入模块
const tls = require('tls');
const fs = require('fs');

const hostname = '127.0.0.1'; //主机名
const port = 3000; //端口

const options1 = {
    key: fs.readFileSync('C:/Users/Administrator/ryans1-key.pem'), //钥匙
    cert: fs.readFileSync('C:/Users/Administrator/ryans1-cert.pem') //证书
  };
const options2 = {
    key: fs.readFileSync('C:/Users/Administrator/ryans2-key.pem'), //钥匙
    cert: fs.readFileSync('C:/Users/Administrator/ryans2-cert.pem') //证书
  };

  //创建一个HTTP服务器
const server = https.createServer(options1 , (req,res) => {
    res.statusCode = 200;  //状态码
    res.setHeader('Content-Type','text/plain');  //设置响应头
    res.end('Hello World'); //快速结束没有任何数据的响应

});


setTimeout(function(){
    server.setSecureContext(options2);
},5000);

//监听
server.listen(port,hostname,()=>{
    console.log(`Server running at https://${hostname}:${port}/`); //输出log
    
});