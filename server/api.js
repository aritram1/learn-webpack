const express = require('express');
const apiServer = express();
const PORT = 3002;

apiServer.get('/',  (req, res)=>{
    res.send({
        "data" : "Misson accomplished!",
        "icon" : ["🎉", "🎉"]
    });
});

apiServer.listen(PORT, ()=>{
    console.log(`API Server started at ${PORT} 🎉 🎉 `);
}); 

