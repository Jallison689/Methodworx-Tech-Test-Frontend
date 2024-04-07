import React, { Component } from 'react';
import './App.css';

function App() {

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
              <code>
                  //dynamically generate the table of products with the additions of the add, details and stock additions
                  //have the basket button up in the corner
                  //have a model pop up when basket is clicked containing the basket
                  //change to checkout page when checkout clicked
              </code>
          </div>
          <p className="read-the-docs">
              Click on the Vite and React logos to learn more
          </p>
      </>
  )
}

export default App
