import React from 'react';

export const Search = ({ handleSearch }) => {
  return (
    <div>
      <input className='searchInput'
             onChange={(e) => handleSearch(e.target.value)} />
    </div>
  )
}
