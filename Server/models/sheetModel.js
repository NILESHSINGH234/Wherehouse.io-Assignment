const { google } = require('googleapis');
const creds = require('../credentials.json');
const dotenv = require('dotenv');
dotenv.config();

const SCOPES = ['https://www.googleapis.com/auth/spreadsheets'];
const SPREADSHEET_ID = process.env.SPREADSHEET_ID;
const RANGE = process.env.RANGE;

const authenticate = async () => {
  const auth = new google.auth.GoogleAuth({
    credentials: {
      client_email: creds.client_email,
      private_key: creds.private_key,
    },
    scopes: SCOPES,
  });

  const authClient = await auth.getClient();
  return authClient;
};

const fetchData = async () => {
  const auth = await authenticate();
  const sheets = google.sheets({ version: 'v4', auth });
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE,
  });
  return response.data.values;
};

const addRow = async (rowData) => {
  const auth = await authenticate();
  const sheets = google.sheets({ version: 'v4', auth });
  await sheets.spreadsheets.values.append({
    spreadsheetId: SPREADSHEET_ID,
    range: RANGE,
    valueInputOption: 'USER_ENTERED',
    requestBody: {
      values: [rowData],
    },
  });
};

module.exports = {
  fetchData,
  addRow,
};
