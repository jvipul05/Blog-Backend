const express = require('express');
const app = express();
 const bodyParser = require('body-parser');
app.use(bodyParser.json());

const dbConnect = require('./config/db');
require('dotenv').config();

app.listen(process.env.PORT || 4000, () => {
    console.log('Server is running');
    });

app.get('/', (req, res) => {
    res.send('Hello World');
    });

const appRoutes = require('./routers/blogr');

app.use('/api/v1', appRoutes);

dbConnect();