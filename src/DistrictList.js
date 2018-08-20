import React from 'react';
import DistrictCard from './DistrictCard';
import './DistrictList.css';
import PropTypes from 'prop-types';


const DistrictList = ({
  districts, searchedDistrict, addToCompare, cardsToCompare, comparedObject,
}) => {
  const districtCards = Object.keys(districts).map(district => <DistrictCard location={districts[district].location} stats={districts[district].stats} addToCompare={addToCompare} />);

  const searchedCards = searchedDistrict.map(district => <DistrictCard location={districts[district].location} stats={districts[district].stats} addToCompare={addToCompare} />);

  const comparedCards = cardsToCompare.map(district => <DistrictCard location={district.location} stats={district.stats} addToCompare={addToCompare} />);

  const comparedData = Object.keys(comparedObject).map(key => <p>{comparedObject[key]}</p>);


  if (Object.keys(comparedObject).length) {
    return (
      <div>
        <section className="compare-section">
          <div>{comparedCards[0]}</div>
          <span>
            <div className="compare-icons">
              <i className="fas fa-arrow-right" />
              <h3>RATIO</h3>
              <i className="fas fa-arrow-left" />
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

DistrictList.propTypes = {
  districts: PropTypes.object.isRequired,
  searchedDistrict: PropTypes.array,
  addToCompare: PropTypes.func.isRequired,
  cardsToCompare: PropTypes.array,
  comparedObject: PropTypes.object
}


export default DistrictList;
