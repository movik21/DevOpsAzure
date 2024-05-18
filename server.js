'use strict';

const express = require('express');

// Constants
const PORT = process.env.PORT || 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('DevOps Deployment Node-Beispiel LÄUFT, aus DockerHub im Container auf Azure& auch Updates sind sichtbar');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);
