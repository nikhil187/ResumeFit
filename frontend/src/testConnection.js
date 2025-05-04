import React, { useState, useEffect } from 'react';

const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://us-central1-se11-cf96b.cloudfunctions.net/api'
  : 'http://localhost:5005/api';

function TestConnection() {
  const [connectionStatus, setConnectionStatus] = useState('Checking...');
  const [error, setError] = useState(null);

  useEffect(() => {
    async function checkConnection() {
      try {
        const response = await fetch(`${API_URL}/test`);
        
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        
        const data = await response.json();
        setConnectionStatus(`Connected! Response: ${data.message}`);
        setError(null);
      } catch (err) {
        console.error('Connection error:', err);
        setConnectionStatus('Failed to connect');
        setError(err.message);
      }
    }

    checkConnection();
  }, []);

  return (
    <div style={{ padding: '20px' }}>
      <h2>API Connection Test</h2>
      <p>Testing connection to: <code>{API_URL}</code></p>
      <div style={{ 
        padding: '15px', 
        borderRadius: '5px',
        backgroundColor: connectionStatus.includes('Connected') ? '#e0ffe0' : '#ffe0e0'
      }}>
        <p><strong>Status:</strong> {connectionStatus}</p>
        {error && (
          <div>
            <p><strong>Error:</strong> {error}</p>
            <div style={{ marginTop: '10px' }}>
              <h3>Troubleshooting:</h3>
              <ul>
                <li>Make sure the backend server is running at <code>http://localhost:5005</code></li>
                <li>Check that the MongoDB connection string in the backend's <code>.env</code> file is correct</li>
                <li>Ensure CORS is properly configured in the backend</li>
                <li>Check the browser console and backend terminal for detailed error messages</li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default TestConnection; 