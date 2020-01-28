import React, { useState } from 'react';

// I get getGif function as a props with object destructuring
export default function SearchForm({ getGif }) {
  // First input value is given as an inputValue
  // SetInputValue function is able to change this inputValue
  // Default value is empty string for inputValue
  const [inputValue, setInputValue] = useState('');

  const handleSubmit = event => {
    // Prevent default events on submit function
    event.preventDefault();
    // I give inputValue as an argument to getGif function for fetch the gifs
    getGif(inputValue);
    // I give empty string as an argument to setInputValue function for empty search place after every query
    setInputValue('');
  }
  return (
    <form onSubmit={handleSubmit} >
      <input
        type="text"
        placeholder="Search Giphy"
        // I catch every hitting the button on keyboard with event.target.value
        // setInputValue update this value as an inputValue
        onChange={event => setInputValue(event.target.value)} />
      <input type="submit" value="Search" />
    </form>

  )
}
