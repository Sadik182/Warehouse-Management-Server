const express = require('express');
const app = express();
const port = process.env.PORT || 5000;



app.get('/', (req, res) => {
    res.send('Warehouse Management System');
})

app.listen(port, () => {
    console.log('Server is Running on port', port);
})