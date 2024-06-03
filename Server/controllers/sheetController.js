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

const createRow = async (req, res) => {
  const rowData = req.body;
  try {
    await addRow(rowData);
    res.status(201).json({ message: 'Row added successfully' });
  } catch (error) {
    console.error('Error adding row to Google Sheets:', error);
    res.status(500).json({ error: 'Error adding row to Google Sheets' });
  }
};

module.exports = {
  getData,
  createRow,
};
