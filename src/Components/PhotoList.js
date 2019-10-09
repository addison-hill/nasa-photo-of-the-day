import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "../Components/PhotoCard";

export default function PhotoList() {
    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY`)
        .then(response => {
            console.log(response);
            setPhoto(response.data)
        })
        .catch(error => {
            console.log("silly error", error)
        })
    }, []);

    return (
        <div className="container">
            <img className="photo" src={photo.hdurl} alt="picute of APOD"/>
            <PhotoCard 
                key={photo.id} 
                title={photo.title}
                explanation={photo.explanation}
                date={photo.date}
                />
        </div>
    );
}