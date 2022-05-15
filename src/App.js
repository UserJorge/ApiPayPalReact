import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import PayPal from './Components/Paypal';

function App() {
  const [checkout,setCheckout]=useState(false);
  return (
    <div className="App">
      {

      checkout?(<PayPal/>):
      (
        <button onClick={()=>{setCheckout(true);}}>Checkout</button>
      )  

      }
  </div>
   
  );

}

export default App;
