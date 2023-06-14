import React from "react";

const Card = () => {

    return (
        <div className="card w-25 m-2" >
            <img src="https://www.cnet.com/a/img/resize/975719fbb4242f346c0db05e044608b2dcf7cddc/hub/2022/09/13/fc6f151c-93b1-471c-97ea-a76c44e30235/switch-tloz-totk-artwork-01.jpg?auto=webp&fit=crop&height=675&width=1200" className="card-img-top" alt="..."/>
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