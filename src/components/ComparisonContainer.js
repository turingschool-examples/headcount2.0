import React, { Component } from 'react';
import Card from './Card';
import '../styles/ComparisonContainer.css';

const ComparisonContainer = (props) => {
  

  // when we click on a card in cardContainer we want to render that card data to a new card in comparison container
  //when we unclick it we want to remove it from the comparison container
  //after 2 cards have been clicked and are in the comparision container we want to compare them
    // console.log(props)
    const dataArray = Object.keys(props.cardCompData)
    const newCard = dataArray.map((location, index) => <Card data={ props.cardCompData[location]} key={index}/>)

    return (
      <section className='comparison-cards'>
        <h1>Comparison Section</h1>
        {newCard}
      </section>
      )
  

}

export default ComparisonContainer