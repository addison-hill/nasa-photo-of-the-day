import React from "react";

const PhotoCard = props => {
    console.log(props);
    return (
        <div className="photo-list">
            <h2>Title: {props.title}</h2>
            <h4>Explanation: {props.explanation}</h4>
            <h5>Date: {props.date}</h5>
        </div>
    );
};
export default PhotoCard;