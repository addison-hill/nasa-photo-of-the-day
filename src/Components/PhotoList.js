import React, { useState, useEffect } from "react";
import axios from "axios";
import PhotoCard from "../Components/PhotoCard";

export default function PhotoList() {
    const [photo, setPhoto] = useState([]);
    const [startDate, setStartDate] = useState("2019-10-09");

    useEffect(() => {
        axios
        .get(`https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=${startDate}`)
        .then(response => {
            console.log(response);
            setPhoto(response.data)
        })
        .catch(error => {
            console.log("silly error", error)
        })
    }, [startDate]);

    return (
        <div className="container">
            <PhotoCard 
                key={photo.id} 
                photo={photo.hdurl}
                title={photo.title}
                explanation={photo.explanation}
                date={photo.date}
                />
            <input type="date" value={startDate} onChange={e => setStartDate(e.target.value)} />
        </div>
    );
}