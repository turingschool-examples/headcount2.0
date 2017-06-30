import React from 'react';
import Card from './Card';
import { string, func, array} from 'prop-types'

const Container = ({ data, clickActive, className, compareAverage, activeCards }) => {
  const iterator = Object.keys(data)
                         .map(key => <Card
                                       city={data[key]}
                                       key={key}
                                       clickActive={clickActive}
                                       activeCards={activeCards}/>)

  return (
    <div>
      {iterator}
    </div>
  )
}

Container.propTypes = {
  data: array,
  clickActive: func,
  className: string,
  compareAverage: func,
  activeCards: array
}

export default Container;
