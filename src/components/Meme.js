import React from "react"
import memesData from "../memesData"

export default function Meme(){
    const [url,setUrl] = React.useState("")
    function onClick(){
        const randomIndex = Math.floor(Math.random()*memesData.data.memes.length)
        setUrl(memesData.data.memes[randomIndex].url)
    }
    return(
        <main>
            <div className="form">
                <input type="text" placeholder="top text" className="form--input" />
                <input type="text" placeholder="bottom text" className="form--input" />
                <button className="form--button" onClick={onClick}>
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={url} className="meme--image"/>
        </main> 
    )
}
