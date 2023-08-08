import React, { useState } from 'react'
import memesData from '../memesData';
import './meme.css'

export default function Meme() {

    const [memeImage, setMemeImage] = useState("")

    function getRandomMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        setMemeImage(memesArray[randomNumber].url)
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                />
                <input
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                />
                <button
                    className="form--button"
                    onClick={getRandomMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <div className="img--container">
                <img src={memeImage} alt="image_meme" className="meme--image" />
            </div>
        </main>

    )
}