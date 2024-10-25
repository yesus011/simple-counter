import React from "react";

const SecondCounter = ({ numOne, numTwo, numThree, numFour, numFive, numSix }) => {
    return (
        <>
            <div className="container mt-4 " >
                <div className="row justify-content-center">
                    <div className="col-8 bg-dark d-flex justify-content-center counter-number pt-3 pb-2">
                        <h1 className="border border-white rounded  text-white "><i class="fa-regular fa-clock"></i></h1>
                        <h1 className="border border-white rounded text-white "> {numSix % 10}</h1>
                        <h1 className="border border-white rounded text-white "> {numFive % 10}</h1>
                        <h1 className="border border-white rounded text-white "> {numFour % 10}</h1>
                        <h1 className="border border-white rounded text-white "> {numThree % 10}</h1>
                        <h1 className="border border-white rounded text-white "> {numTwo % 10}</h1>
                        <h1 className="border border-white rounded text-white "> {numOne % 10}</h1>
                    </div>
                </div>
            </div>

        </>
    )
}


export default SecondCounter