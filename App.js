import React from "react"
import data from "./data.js"
import Navbar from "./components/Navbar.js"
import Place from "./components/Place.js"

export default function App() {
    let current = data.map(place => {

        return (
            <Place
                key={place.title}
                currentPlace={place}
            />
        )
    })

    return (
        <div>
            <Navbar />
            <section>
                {current}
            </section>

        </div>
    )
}