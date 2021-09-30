const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello Erik!');
});

app.listen(5000, () => console.log('Running on port 5000'));
