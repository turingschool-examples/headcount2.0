import React from 'react';

const LocationList = ({ locations, selectLocation }) => {
    const locationButtons = locations.map((location, i) => (
        <button key={i}
            name={location}
            className='LocationList__btn'
            onClick={() => {
                selectLocation(location)
            }} >
            {location}
        </button>
    ))

    return (
        <aside className='LocationList'>
            {locationButtons}
        </aside>
    )
}

export default LocationList;