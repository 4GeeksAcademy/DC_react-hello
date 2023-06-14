import React from "react";
import Jumbotron from "./jumbotron.jsx";
import Card from "./card.jsx";




const Container = () => {

    return (
    
    <div className="container col-9 ">
        <Jumbotron/>
        <div className="d-flex m-3">
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>       
    </div>)

}

export default Container;