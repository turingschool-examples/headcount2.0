import React from "react";
import "./CSS/DistrictCard.css";

export const DistrictCard = ({ location, stats, selectCard, cardClick }) => {
  return (
    <div className="district-card">
      <h1 className="district-location">{location}</h1>
      {Object.keys(stats).map((year, i) => {
        const avg = stats[year];
        return (
          <section
            className={avg < 0.5 ? "year-red" : "year-black"}
            key={i}
            onClick={e => selectCard(location)}
          >
            {year} :
            <span className={avg < 0.5 ? "year-red" : "year-black"}>{avg}</span>
          </section>
        );
      })}
    </div>
  );
};
