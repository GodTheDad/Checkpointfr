import React, {useState, useEffect} from 'react'
import AgentsList from '../Database.js'
import {Link} from "react-router-dom"
import AgentCard from './AgentCard.jsx'
import './AgentList.css'
const Agents  = () => {
  const [agents, setAgents] = useState([]);

  const fetchAgents = () => {
    
    return fetch("/agents")
          .then((response) => response.json())
          .then((data) => setAgents(data));
  }

  useEffect(() => {
    fetchAgents();
  },[])
  if (agents == []) {

  } else{
    return (
      <>
      <div className='AgentList'>
          {agents.map((agent) => {
          return (
            <Link to = {`/${agent.AgentLink}`}><AgentCard key={agent.AgentName} agentname={agent.AgentName} agentimg={agent.AgentImage}></AgentCard></Link>
          )})}
          
      </div>
      {console.log(agents)}
      </>
    )
  }
  
}

export default Agents