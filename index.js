const express = require('express');
const path = require('path');
const swig = require('swig');
const app = express();
app.engine('html', swig.renderFile);
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.render(path.resolve(__dirname, 'index.html'));
});

const server = app.listen(8082, function () {
    const host = server.address().address;
    const port = server.address().port;

    console.log("Example app listening at http://%s:%s", host, port);
});
