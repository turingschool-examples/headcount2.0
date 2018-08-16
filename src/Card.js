import React, { Component } from 'react'
import './Card.css'
import PropTypes from 'prop-types';

class Card extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
  }

  handleClick = async () => {
    let currentState = this.state.clicked
    await this.setState({ clicked: !currentState })
    this.props.displaySelected(this.props.location)
  }

  render() {
    return(
      <div className={this.state.clicked ? 'selectedCard': 'cards'} onClick={this.handleClick}>
       <h2>{this.props.location}</h2>
         {
           Object.keys(this.props.stats).map(stat => {
             return (
               <article>
                 <ul className={this.props.stats[stat] < 0.5 ? 'highNum' : 'lowNum'}>
                   {stat}: {this.props.stats[stat]}
                 </ul>
               </article>
             )
           })
         }
      </div>
    )
  
  }
      
}

// return (
//  <div className="cards">
//   <h2>{location}</h2>
//     {
//       Object.keys(stats).map(stat => {
//         return (
//           <article>
//             <ul className={stats[stat] < 0.5 ? 'highNum' : 'lowNum'}>
//               {stat}: {stats[stat]}
//             </ul>
//           </article>
//         )
//       })
//     }
//  </div>


// const Card = ({ location, stats }) => {

// }

export default Card