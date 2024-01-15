import React from 'react'
import './MapCard.css'


const QueryCard = ({queryimg, querytext}) => {
  return (
    <div className='Bigger'>
        <img src = {queryimg}/>
        <h1 className='fontlink'>{querytext}</h1>
    </div>
  )
}

export default QueryCard