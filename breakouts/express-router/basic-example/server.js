const express = require('express');
const app = express();
const port = 3000;

const routes = require('./routes');
app.use(routes);

app.get('/new', (req, res) => {
  res.send('Hello from new!');
});

app.listen(port, () => console.log(`Example app listening on port ${port}`));
