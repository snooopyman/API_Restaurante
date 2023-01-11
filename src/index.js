const express = require('express');
const app = express();
const router = require('./routes/index');

//rutas
app.use(express.static('./src/public'));
app.use('/', router);



app.listen(8080, ()=> {
    console.log('Listening in 8080');
});