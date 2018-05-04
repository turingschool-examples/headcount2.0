import React from 'react';
import './DistrictCard.css';

const DistrictCard = (props) => {
  const individualDistrict = Object.keys(props.districtData.data);
  const districtAnnualData = individualDistrict.map((annualData, index) => {
    const data = props.districtData.data[annualData];
    return (
      <li
        style={{
          color: data > .5 ? 'green' : '9E0C09'
        }}
        key={`card${index}`}
      >
        {annualData}: {data}
      </li>
    );
  });

  return (
    <article className="district-card" onClick={() => props.handleSelect(props.districtData.location)}>
      <section className="district-card-header">
        <h2 className="district-name">{props.districtData.location}</h2>
      </section>
      <section className="district-card-body">
        <h3>Yearly Progress</h3>
        <ul className="district-data">
          {districtAnnualData}
        </ul>
      </section>
    </article>
  );
};

export default DistrictCard;