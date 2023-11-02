import React, { useState } from 'react';
import BikeImage from './bike.jpg';

const FunctionalComponentState = () => {
    let [Data, setData] = useState("Default");
    let [kaipan, gemete] = useState(false);
    let variable = "Data"
    const changeData = () => {
        console.log("called");
        variable = "Test"
        setData("Updated Value")
        gemete("Updated new data")
    }
    return (
        <>
            <p>Simple variable : {variable}</p>
            <p>State Data : {Data}</p>
            <p>Other State : {kaipan}</p>
            {/* <button className='btn btn-primary' onClick={()=>{ console.log("called inside  btn"); setData("Updated Value inside btn")}}>Click</button> &nbsp;    */}

            {/* <button className='btn btn-primary' onClick={changeData}>Click</button> */}
            <button className='btn btn-primary' onClick={()=>{  gemete(!kaipan)}}>{kaipan?"Hide":"Show"}</button>


            <div className="row">
            {(kaipan)?<div className="col-4">
                    <div className="card">
                        <img className="card-img-top" src={BikeImage} alt="Card image cap" />
                        <div className="card-body">
                            <h5 className="card-title">Title</h5>
                            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                            <a href="#" className="btn btn-primary">Go somewhere</a>
                        </div>
                    </div>
                </div>:""}
                
            </div>
        </>
    );
};

export default FunctionalComponentState;