import React from 'react';

const LocationList = ({ locations, selectLocation }) => {
    const locationButtons = locations.map((location, i) => (
        <button key={i}
            name={location}
            className='location-btn'
            onClick={() => selectLocation(location)} >
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