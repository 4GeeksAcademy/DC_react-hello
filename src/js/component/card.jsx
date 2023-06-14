import React from "react";

const Card = () => {

    return (
        <div className="card w-25 m-2" >
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>   
            </div>
            <div className="card-footer d-flex justify-content-center">
                <small className="btn btn-primary ">Find out more!!</small>
            </div>
        </div>
    )
}

export default Card