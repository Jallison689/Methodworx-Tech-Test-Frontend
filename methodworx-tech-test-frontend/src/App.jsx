import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState([])

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await fetch("apiurl/api/GetAllProducts");
            const jsonResponse = await response.json();
            setData(jsonResponse)
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }

  return (
      <>
          <div>
          </div>
          <h1>Products</h1>
          <div className="card">
              <table>
                  <tr>
                  </tr>
              </table>
              <p>
                  Edit <code>src/App.jsx</code> and save to test HMR
              </p>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </>
  )
}

export default App
