require('dotenv').config();
const express = require('express');
const {viewEngineConfig,configStaticFile} = require('./config/viewEngine');
const app = express();
const port = process.env.PORT;
const hostname = process.env.HOSTNAME;
const database = require("./config/database");
const router = require('./route/web');

app.use(express.json()); // Used to parse JSON bodies
app.use(express.urlencoded({extended: true})); //Parse URL-encoded bodies

viewEngineConfig(app);
configStaticFile(app);

app.use('/',router);

app.listen(port,hostname, () => {
    console.log(`Web is runing on ${port}`);
})