let express = require('express');
let app = express();

//rota /json
app.get('/json', (req, res) => 
    
    res.json({message: 'Hello Json'})
    );



 module.exports = app;
