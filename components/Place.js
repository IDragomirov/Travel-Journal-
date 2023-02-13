import React from "react"


export default function Place(props) {

    return (
        <div className="template-container">
            <div className="img-container">
                <img src={props.currentPlace.imageUrl} />
            </div>
            <div className="text-container">
                <p className="location"><i className="fas fa-map-marker-alt"><span className="countryName">{props.currentPlace.location}</span></i>
                <a className="mapUrl" href={props.currentPlace.googleMapsUrl}>View on Google Maps</a> </p>
                <h1 className="title">{props.currentPlace.title}</h1>
                <p className="dates">{props.currentPlace.startDate} - {props.currentPlace.endDate}</p>
                <p className="description">{props.currentPlace.description}</p>
                <hr width="90%" />
            </div>

        </div>
    )
}