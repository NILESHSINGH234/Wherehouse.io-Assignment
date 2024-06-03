import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await axios.get('http://localhost:5000/api/data'); // Update with your backend URL
      setData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching data', error);
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <h1>Google Sheets Data</h1>
      <button onClick={fetchData} disabled={loading}>
        {loading ? 'Syncing...' : 'Sync Data'}
      </button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        data.length > 0 && (
          <table>
            <thead>
              <tr>
                <th>Column A</th>
                <th>Column B</th>
                <th>Column C</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td>{row[0]}</td>
                  <td>{row[1]}</td>
                  <td>{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        )
      )}
    </div>
  );
}

export default App;
