import React from 'react';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({ selected, section, title, listOfData, addCompareCard, removeCompareCard }) => {
  const listItems = listOfData.map((data, index) => {
    const year = Object.keys(data)[0];
    const dataNum = Object.values(data)[0];
    const listItem = `${year}: ${dataNum}`;
    let dataStyle; 
    dataNum >= 0.5 ? dataStyle = 'above' : dataStyle = 'below';

    return <li className={ dataStyle } key={ `listItem${index}` }>{ listItem }</li>;
  })

  let clickFunc;
  if (section === 'compare' || selected) {
    clickFunc = () => {
      removeCompareCard(title) 
    }
  } else {
    clickFunc = () => {
      selected ? selected = false : selected = true;
      addCompareCard(title)
    }
  }

  let selectClass;
  selected ? selectClass = 'selected' : selectClass = ''

  return (
    <div className={ `card ${selectClass}` } 
          onClick={ clickFunc }>
      <h3 className="title">{ title }</h3>
      <ul className='list-items'>{ listItems }</ul>
    </div>
  )

}

Card.propTypes = {
  title: PropTypes.string.isRequired, 
  listOfData: PropTypes.array.isRequired
}

export default Card;
