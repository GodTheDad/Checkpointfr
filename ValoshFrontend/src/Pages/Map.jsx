import React from 'react'
import Logo from '../components/Logo'
import MapList from '../components/MapList'
import AgentsList from '../Database'

const MapElement = ({idNum}) => {
  return (
    <div className="biggerDiv">
     <div className="bigDiv">
      <Logo/> 
      <MapList idNum={idNum}></MapList>
      </div>
    </div>
  )
}

export default MapElement