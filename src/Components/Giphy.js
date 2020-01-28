import React, { useState } from 'react';
import Giphymaker from './Giphymaker';
import SearchForm from './SearchForm';

export default function Giphy() {
  const [gifs, setGifs] = useState([]);
  const [isLoading, setLoading] = useState();
  const [hasError, setError] = useState();

  const getGif = query => {
    setLoading(true);
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=VMSsocOG31HgZ7zDkp1Ccm1xgYn5ZyGe&q=${query}`)
      .then(res => res.json())
      .then(data => {
        setGifs(data.data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setLoading(false);
        setError(true);
      })
  }

  if (isLoading) return <h2>Loading...</h2>
  if (hasError) return <h2>TypeError: Failed to fetch</h2>

  return (
    <div>
      {/* getGif, which we use as a props on the SearchForm page is equal to getGif used as a function on this page. */}
      <SearchForm getGif={getGif} />
      {/* gifs, which we use as a props on the Giphymaker page is equal to gifs used as an array variable on this page. */}
      <Giphymaker gifs={gifs} />
    </div>
  )
}
