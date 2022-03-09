import React from "react"
import memesData from "../memesData"

export default function Meme() {
  function getMemeImage() {
    const memeArray = memesData.data.memes
    const randomNumber = Math.floor(Math.random() * memeArray.length)
    console.log(randomNumber)
    const url = memeArray[randomNumber].url
    console.log(url)
  }
  return (
    <main>
      <div className="form">
        <input
          type="text"
          placeholder="Top Text"
          className="form-input"/>
        <input
          type="text"
          placeholder="Botton Text"
          className="form-input"/>
        <button
          className="form-button"
          onClick={getMemeImage}
          >
          Get a new meme image
          </button>
      </div>
    </main>
  )
}
