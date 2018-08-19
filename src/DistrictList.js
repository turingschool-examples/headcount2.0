import React from 'react';
import DistrictCard from './DistrictCard';
import './DistrictList.css';

const DistrictList = ({
  districts, searchedDistrict, addToCompare, cardsToCompare, comparedObject,
}) => {
  const districtCards = Object.keys(districts).map(district => <DistrictCard location={districts[district].location} stats={districts[district].stats} addToCompare={addToCompare} />);

  const searchedCards = searchedDistrict.map(district => <DistrictCard location={districts[district].location} stats={districts[district].stats} addToCompare={addToCompare} key={searchedCards.length} />);

  const comparedCards = cardsToCompare.map(district => <DistrictCard location={district.location} stats={district.stats} addToCompare={addToCompare} />);

  const comparedData = Object.keys(comparedObject).map(key => <p>{comparedObject[key]}</p>);
  console.log(comparedObject);


  if (Object.keys(comparedObject).length) {
    return (
      <div>
        <section className="compare-section">
          <div>{comparedCards[0]}</div>
          <span>
            <div className="compare-icons">
              <h3>RATIO</h3>
            </div>
            <div className="averages">{comparedData}</div>
          </span>
          <div>{comparedCards[1]}</div>
        </section>

        <div>{districtCards}</div>
      </div>
    );
  }

  if (searchedDistrict.length) {
    return (
      <div>
        <section className="compare-section">
          <div>
            {comparedCards}
          </div>
        </section>
        <div>
          {searchedCards}
        </div>
      </div>
    );
  }

  return (
    <React.Fragment>
      <div className="compare-section">
        {comparedCards}
      </div>
      <div>
        {districtCards}
      </div>
    </React.Fragment>
  );
};


export default DistrictList;
