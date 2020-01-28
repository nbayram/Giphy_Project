import React from 'react'

// Gifs array is passed as a props on Giphymaker function
export default function Giphymaker({ gifs }) {
  return (
    <ul>
      {
        // gif paramater give us each gif object
        gifs.map(gif => <li key={gif.id}><img src={gif.images.original.url} alt={gif.title} /></li>
        )
      }
    </ul>
  )
}
