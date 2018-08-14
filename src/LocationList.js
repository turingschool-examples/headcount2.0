import React from 'react';

const LocationList = ({ locations, selectLocation }) => {
    const locationButtons = locations.map((location, i) => (
        <button key={i}
            name={location}
            onClick={selectLocation} >
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