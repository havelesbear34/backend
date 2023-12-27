const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

// Menggunakan rute yang ada di file terpisah
const apiRoutes = require('./routes/apiRoutes');
app.use('/api', apiRoutes);

app.listen(port, () => {
  console.log(`Server berjalan di http://localhost:${port}`);
});
