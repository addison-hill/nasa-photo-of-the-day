import React from "react";
import {
    Card, CardImg, CardText,
    CardTitle, CardSubtitle
    } from 'reactstrap';

const PhotoCard = props => {
    console.log(props);
    return (
        <Card body outline color="primary">
            <CardImg className="photo" src={props.photo} alt="picture of APOD"/>
            <CardTitle className="CardTitle">Title: {props.title}</CardTitle>
            <CardText className="CardText">Explanation: {props.explanation}</CardText>
            <CardSubtitle className="CardSubtitle">Date: {props.date}</CardSubtitle>
        </Card>
    );
};
export default PhotoCard;



        // <div className="photo-list">
        //     <img className="photo" src={props.photo} alt="picture of APOD"/>
        //     <h2>Title: {props.title}</h2>
        //     <h4>Explanation: {props.explanation}</h4>
        //     <h3>Date: {props.date}</h3>
        // </div>