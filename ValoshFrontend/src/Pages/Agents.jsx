import React from 'react'
import Logocopy from '../components/Logocopy'
import Agents from '../components/Agentlist'
const AgentElement = () => {
  return (
    <div className="biggerDiv">
     <div className="bigDiv">
      <Logocopy/> 
      <Agents/>
      </div>
    </div>
  )
}

export default AgentElement