var express = require('express');
var npmRun = require('npm-run');
var bodyParser = require('body-parser');
const path = require('path');
var fs = require('fs');
var app = express();
var PORT = process.env.PORT || 5000;
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true });


app.get('/api/hello', (req, res) => {
    res.send({ express: 'Hello From Express' });
});

app.post('/api/world', (req, res) => {
    console.log(req.body);
    res.send(
        `I received your POST request. This is what you sent me: ${req.body.post}`,
    );
});



app.get('/', async function (request, response) {
    var result = await runNpmShow();
    var dir = './project';
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir);
    }
    response.send(result);
})

app.get('/message', function (request, response) {
    console.log(request.query.message)
    var message = request.query.message;
    response.send(message);
})

console.log('chekcing', process)
if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, 'client/build')));
    console.log('chekcing', process)      
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
    });
  }


app.listen(PORT, function () {
    console.log('Server is Started at', PORT)
})

function runNpmShow() {

    return new Promise((resolve) => {
        npmRun.exec(`npm show redux versions`, (err, stdout) => {
            if (!err) {
                const depVersionsList = JSON.parse(stdout.replace(/'/g, '"'));
                resolve(depVersionsList);
            } else {
                console.error(`Could not fetch version info for: Skip.`);
                resolve(err);
            }
        });
    });

};


