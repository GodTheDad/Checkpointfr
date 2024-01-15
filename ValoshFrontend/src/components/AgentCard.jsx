import React from 'react'
import './AgentCard.css'


const AgentCard = ({agentimg, agentname}) => {
  return (
    <div className='ACard'>
        <img src = {agentimg}/>
        <h3 className='fontlink'>{agentname}</h3>
    </div>
  )
}

export default AgentCard