import React from 'react';
import './App.css'

function App() {
  const name = 'Rui'

  return (
    <div className="App">
    <button id="Bt1">button1</button>
      React
      {name}
      {/* {console.log(App)} */}
      {/* {console.log(name)} */}
    </div>
  );
}

//Declaring object
const AppInstance = new App()
console.log(AppInstance)

export default App;
