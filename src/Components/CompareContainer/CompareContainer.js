import React from 'react';
import './CompareContainer.css';

const CompareContainer = ({matchedCards}) => {
		const matchedCardKeys = Object.keys(matchedCards)
		const matchedCardValues = Object.values(matchedCards)


		return(
			<div className='card'>
				<h3>{matchedCardKeys[0]}</h3>
				<h5>{matchedCardValues[0]}</h5>
				<h1>{matchedCardValues[2]}</h1>
				<h3>{matchedCardKeys[1]}</h3>
				<h5>{matchedCardValues[1]}</h5>
			</div>
		)

}


export default CompareContainer;