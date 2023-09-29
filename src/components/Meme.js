import React from 'react'
import memesData from "../memesData"

export default function Meme() {
  // creating new state called `memeImage` with an empty string as default.
  let [memeImage, setMemeImage] = React.useState("")
  function GetMemeImage(){
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    // When the getMemeImage function is called, it updates the `memeImage` state to be the random chosen image URL
    setMemeImage(memesArray[randomNumber].url
    ) // if the previous state is not needed then callback function is not necessary.
  }
  return (
    <main>
      <div className="form">
        <input className="form--input" type="text" placeholder="Top text" />
        <input className="form--input" type="text" placeholder="Bottom text"/>
        <button 
        className="form--button"
        onClick={GetMemeImage}
        >Get a new meme image </button>
        <img className='meme--image' src={memeImage} />
      </div>
    </main>
  )
}