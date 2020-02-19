import React, { useState, useEffect } from "react";
import axios from "axios";

import "./App.css";

function App() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/cars")
      .then(res => {
        console.log("cars inventory", res);
        setCars(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // const deleteCar = () => {
  //   return(

  //   )
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Car Dealer:</h1>
        <h2>Inventory:</h2>
        {cars.map(car => {
          return (
            <div key={car.id}>
              <ul>
                <li>
                  Make: {car.make}, Model: {car.model}, Mileage: {car.mileage},
                  Transmission: {car.transmission}
                </li>
                <button>Delete</button>
              </ul>
            </div>
          );
        })}
      </header>
    </div>
  );
}

export default App;
