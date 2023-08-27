import React from "react";

import "./Card.css";

function Card (props) {
  console.log(props);
  return (
    <>
    <div className="card-container">
      {props.imgSrc && (
        <img src={props.imgSrc} className="card-img" />
      )}
      {props.title!=0 && <h4 className="card-title">{props.title}</h4>}
      {props.user==0? <p className="card-description">User : None</p> :
       <p className="card-description">User : {props.user}</p>}
      {props.prepos==0? <p className="card-description">Public Repos : 0</p> :
       <p className="card-description">Public Repos :  {props.prepos}</p>}
      {props.pgists==0? <p className="card-description">Public Gists : 0</p> : 
      <p className="card-description">Public Gists : {props.pgists}</p>
      }
      {props.created && <p className="card-description">Created At : {props.created}</p>}
    </div>
  </>
  );
}

export default Card;
