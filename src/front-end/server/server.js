const express = require('express');
const server = express();

const homeRouter = require('./routes/home');
//server.use('/', homeRouter);

// const fs = require('fs') // this engine requires the fs module
// server.engine('html', (filePath, options, callback) => { // define the template engine
//     fs.readFile(filePath, (err, content) => {
//         if (err) return callback(err);

//         let StringContent = content.toString();
//         let pattern = /{{(.*?)}}/gi;
//         let allOccurences = pattern.exec(StringContent);
//         let neededOccurences = [];
//         for(let each of allOccurences){
//             if(each.startsWith('{{') && each.endsWith('}}')){
//                 neededOccurences.push(each.trim());
//             }
//         }   
//         for(let each of neededOccurences){
//             let thisThing = `{{${each}}}`;
//             let thatThing = `[${options[each]}]`;
//             StringContent.replace(thisThing, thatThing);
//         }
//         return callback(null, StringContent);
//     });
// });

server.set('views', './views') // specify the views directory
server.set('view engine', 'html') // register the template engine

//server.set('view engine', 'pug');

server.get('/', (req, res) => {
    console.log('It\'s a get request to root!');
    //res.end();
    res.sendFile(__dirname+"/views/index.html");
})

const PORT = 3001;  

server.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
});