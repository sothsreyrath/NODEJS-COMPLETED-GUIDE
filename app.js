const http = require('http');
//const routes = require('./assigement-node-server/routes');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');
const path = require('path');
const rootDir = require('./util/path');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))

app.use("/admin", adminRoute);
app.use(shopRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
});

const server = http.createServer(app);

server.listen('3000');
