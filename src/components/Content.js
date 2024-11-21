import React from "react";
import Product from "./Product";

function Content(){
    return (
    <div className ="container">
      <div className="row">
        <div className="col-xl-3"><Product name ="Nike" price="1800"/></div>
        <div className="col-xl-3"><Product  name ="khadi" price="900"/></div>
        <div className="col-xl-3"><Product  name ="puma" price="1300"/></div>
        <div className="col-xl-3"><Product  name ="fabindea" price="1600"/></div>
      </div>
    </div>
  );}
  
export default Content;