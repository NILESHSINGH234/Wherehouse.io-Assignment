const { fetchData, addRow } = require('../models/sheetModel');

const getData = async (req, res) => {
  try {
    const data = await fetchData();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data from Google Sheets:', error);
    res.status(500).json({ error: 'Error fetching data from Google Sheets' });
  }
};



module.exports = {
  getData,
  createRow,
};
