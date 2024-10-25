//import react into the bundle
import React from "react";
import ReactDOM from "react-dom/client";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import SecondCounter from "./component/SecondCounter.jsx"

let counter = 0
setInterval(() => {
    const one = Math.floor(counter / 1)
    const two = Math.floor(counter / 10)
    const three = Math.floor(counter / 100)
    const four = Math.floor(counter / 1000)
    const five = Math.floor(counter / 10000)
    const six = Math.floor(counter / 100000)

    counter++
    //render your react application
    ReactDOM.createRoot(document.getElementById('app')).render(
    <SecondCounter 
        numOne={one}
        numTwo={two}
        numThree={three}
        numFour={four}
        numFive={five}
        numSix={six}
    />
);

}, 400)

