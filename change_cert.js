function change_cert(server,keypath,certpath)
{
    const fs = require('fs');
    const filepath = './';
    const options = {
        key: fs.readFileSync(keypath), //钥匙
        cert: fs.readFileSync(certpath) //证书
      };
    console.log(`正在监听 ${filepath}`);
    
    fs.watch(filepath, (eventType, filename) => 
    {
        console.log(`event type is: ${eventType}`);
        if (filename) 
        {
          console.log(` ${filename}文件发生更新`);
        } 
        else 
        {
          console.log('filename not provided');
        }
        if(eventType='change')
        {
            setTimeout(function(){
                server.setSecureContext(options);
            },5000);
            console.log('证书已更新完成');
        }
        else{
            console.log('未发生更新');
        }
    });
   
}
module.exports=change_cert;