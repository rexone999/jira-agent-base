
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(__dirname));

app.get('/installed', (req, res) => {
  res.sendStatus(204);
});

app.listen(port, () => {
  console.log(`Basic Jira app running on http://localhost:${port}`);
});
