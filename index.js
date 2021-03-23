const fs = require('fs');
const prompt = require('prompt-sync')();

const path = "files/";
const input = prompt('Type your file name : ');
const content = prompt('Type your content : ');

fs.writeFile(path + input, content,(err) => {
    if (err) return console.log(err);
    console.log('your files is created');
});