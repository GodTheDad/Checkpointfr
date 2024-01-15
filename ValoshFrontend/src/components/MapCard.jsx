import React from 'react'
import './MapCard.css'


const MapCard = ({mapimg, mapname}) => {
  return (
    <div className='Card'>
        <img src = {mapimg}/>
        <h1 className='fontlink'>{mapname}</h1>
    </div>
  )
}

export default MapCard