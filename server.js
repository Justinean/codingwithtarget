// Dependencies

const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
var PORT = process.env.PORT || 3001;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'index.html')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));


// const http = require('http');

// var options = {
//     host: "23.253.147.10",
//     path: "/api/maze/1"
// }

// callback = function (response) {
//     var str = '';

//     //another chunk of data has been received, so append it to `str`
//     response.on('data', function (chunk) {
//         str += chunk;
//     });

//     //the whole response has been received, so we just print it out here
//     response.on('end', function () {
//         console.log(JSON.parse(str).message)
//         obj = JSON.parse(str).exits
//         let objKeys = Object.keys(obj);
//         let objValues = Object.values(obj);
//         let shortest = null;
//         console.log(objKeys, objValues)
//         console.log(objKeys[objKeys.length - 1])
//         for (i in objKeys) {
//             if (objKeys.length === 1) {
//                 shortest = objKeys[objKeys.length];
//             } else {
//                 if (shortest === null) {
//                 }
//             }
//         }
//         return objKeys, objValues
//     });
// }

// function makeRequest() {
//     http.request(options, callback).end();
// }

// module.exports = makeRequest;
