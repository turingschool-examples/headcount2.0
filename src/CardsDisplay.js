import React from 'react';
import Card from './Card'

const CardsDisplay = ({ cards }) => {
  return (
    <section>
      {Object.keys(cards).map((key, index) => {
        return (
          <section key={index}>
            <p>{cards[key].location}</p>
            <Card school={key}
                  data={cards}/>
          </section>
        )
      })}
    </section>

      // <Card key={index}
      //       location={cards.location}
      //
      //   />

  )
}



//   return(
//     <div>
//       // {dataArr}
//     </div>
//   );
// }

export default CardsDisplay
