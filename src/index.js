const express = require('express');
const app = express();

app.use(express.static('./src/public'));
app.listen(8080, ()=> {
    console.log('Listening in 8080');
});

