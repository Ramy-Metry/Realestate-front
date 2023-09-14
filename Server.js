const express = require('express');
const app = express();
const path = require('path');

// Specify the absolute path to the external build folder
const buildFolderPath = path.join(__dirname, 'Frontend', 'build');

app.use(express.static(buildFolderPath));

app.get('/', (req, res) => {
    const options = {
        root: buildFolderPath,
    };
    res.sendFile('index.html', options); // Use the correct relative path
});
app.get("/hello", (req, res) => {
    res.send("Welcome to CuroRx");
});


app.listen(5000, () => {
    console.log('App listening on port 5000');
});