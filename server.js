const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('<h1>MILESTONE 2</h1><p>Hello, World!</p>');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
