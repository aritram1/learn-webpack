const express = require('express');

const server = express();
const PORT = 3001;

server.get('/',  (req, res)=>{
    res.send('<html><head><style>.content{color: red;}</style></head><body><div class="content">Excuse me!</div></body></html>');
});

server.post('/',  (req, res)=>{
    res.send('<html><head><style>.content{color: blue;}</style></head><body><div class="content">You are excused!</div></body></html>');
});

server.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
}); 

