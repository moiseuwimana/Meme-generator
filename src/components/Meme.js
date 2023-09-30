import React from 'react'
import memesData from "../memesData"

export default function Meme() {
  // creating new state called `memeImage` with an empty string as default.
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg"
  });
  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function GetMemeImage(){
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url
    ;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    })) 
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
        <img className='meme--image' src={meme.randomImage} />
      </div>
    </main>
  )
}