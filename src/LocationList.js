import React from 'react';

const LocationList = ({ locations, handleClick }) => {
    const locationButtons = locations.map((location, i) => (
        <button key={i}
            name={location}
            onClick={handleClick} >
            {location}
        </button>
    ))

    return (
        <div>
            <aside>
                {locationButtons}
            </aside>
        </div>
    )
}

export default LocationList;