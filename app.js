const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send('Hello World');
});

<<<<<<< HEAD
app.listen(5000, () => console.log('Running on port 5000'));
=======
app.listen(5000, () => console.log('Running on Port 5000'));
>>>>>>> dd8e7dd491ca6f4b3cf350c7c797dd230d1e7a0a
