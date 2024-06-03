const express = require('express');
const bodyParser = require('body-parser');
const sheetRoutes = require('./routes/sheetRoutes');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use('/api', sheetRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
