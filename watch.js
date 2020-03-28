const fs = require('fs');
const filepath = 'E:/workspace/1.txt';

console.log(`正在监听 ${filepath}`);

fs.watch(filepath, (eventType, filename) => {
    console.log(`event type is: ${eventType}`);
    if (filename) {
      console.log(` ${filename}文件发生更新`);
    } else {
      console.log('filename not provided');
    }
  });