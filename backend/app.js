const express = require('express');
const app = express();
const tasks = require('./routes/tasks');

app.use('/api/tasks', tasks);

app.listen(3000, () => console.log("Servidor en puerto 3000"));
