import React from 'react'
import Card from './Card'
import './CardList.css'

const CardList = ({selectedCards, helper}) => {
  console.log(helper.data);
  return (
    <div className="card-list">
      {Object.keys(helper.data).map((school, index) => {

         return (
           <Card schoolNames={school}
                 helper={helper}
                 key={index}/>
         )
      })}
    </div>
  )
}

export default CardList;

//
// const IdeaList = ({ ideas, handleDelete }) => {
//   const ideasArray = ideas.map(idea => <Idea key={idea.id} {...idea} handleDelete={handleDelete} />);
//   return (
//     <div>
//       {ideasArray}
//     </div>
//   )
// };
