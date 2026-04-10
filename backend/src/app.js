const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;
const Tarea = require('./db/tareas');

app.get('/', (req, res) => {
   res.json(Tarea)
})

app.post('/', (req, res) => {
    const title = req.body; 
    const nuevaTarea = {
        id : Tarea.length + 1,
        title : title,
    }
    Tarea.push(nuevaTarea);
    res.json(nuevaTarea);
})

app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto http://localhost:${port}`);
});
