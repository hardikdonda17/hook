import logo from './logo.svg';
import React, { useState } from 'react';

import './App.css';

function App() {
  const [speed, setSpeed] = useState(0);
  const [id, setAge] = useState(99);
  const name = useState('Danial');
  const age = useState(42);
  var i_disabled = true;
  var d_disabled = true;
  const maxSpeed = 120;
if(speed==0){
  i_disabled=false;
  d_disabled=true;
  
}
else if(speed==maxSpeed){
  d_disabled=false;
  i_disabled=true;
}
else{
  i_disabled=false;
  d_disabled=false;
}
  return (
    <div className="App">
      <div>
        <p>Driver Id : {id}</p>
        <p>Driver Name : {name}</p>
        <p>Driver Age : {age}</p>
        <p>Max Speed is {maxSpeed}</p>
        <p>Current Speed is {speed}</p>
        <button disabled={i_disabled} onClick={() => setSpeed(speed + 5)}>
          Increase Speed 5 km/h
        </button>{" "}
        <br></br>
        <button disabled={d_disabled} onClick={() => setSpeed(speed - 5)}>
          Decrease Speed 5 km/h
        </button>
    </div>
    </div>
  );
}

export default App;
