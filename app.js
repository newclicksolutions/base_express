const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Bienvenidos a la página');
});

app.listen(port, () => {
  console.log(`Servidor escuchando en el puerto ${port}`);
});
