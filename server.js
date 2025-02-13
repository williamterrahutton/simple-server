const express = require('express');
const path = require('path');
const app = express();
const port = 8000;

// Serve terrain and texture files
app.use(express.static(path.join(__dirname, 'public')));

// Serve terrain tiles
app.get('/terrain/:z/:x/:y.terrain', (req, res) => {
  const { z, x, y } = req.params;
  res.sendFile(path.join(__dirname, 'public', 'terrain', z, x, `${y}.terrain`));
});

// Serve texture tiles
app.get('/textures/:z/:x/:y.png', (req, res) => {
  const { z, x, y } = req.params;
  res.sendFile(path.join(__dirname, 'public', 'textures', z, x, `${y}.png`));
});

// Start server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
