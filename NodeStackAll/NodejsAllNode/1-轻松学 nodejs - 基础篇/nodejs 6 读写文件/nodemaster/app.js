let fs = require('fs');/** * fs.readFileSync(‘第一个参数是文件名’, '第二个参数是文件编码') * readFileSync 同步 */// readFileSync 同步的操作  输出文件的内容// let readMe = fs.readFileSync("readMe.txt", 'utf8');  // readMe.txt 是一个文件名// readFile 异步的操作let readMe = fs.readFile("readMe.txt", "utf8", (err, data) => {  console.log(data);  // 把 readMe.txt 的文件里的内容， 通过 writeFile写入writeMe.txt的文件里，也就是说，通过writeFile写入的同时并创建writeMe.txt的一个文件  fs.writeFile('writeMe.txt', data, () => {    console.log('writeMe has finished')  });});// console.log(readMe);// console.log('finished');// 这里是按顺序执行的。// 写文件/** * fs.writeFileSync("文件名", "要写入的内容"); *///fs.writeFileSync("readMe.txt", "hello world!");/*  let waitTill = new Date(new Date().getTime() + 4 * 1000);  while(waitTill > new Date()){  };  console.log('finished');*/