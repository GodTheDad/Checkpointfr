import React, {useState, useEffect}from 'react'
import AgentsList from '../Database'
import MapCard from './MapCard'
import { useSelector, useDispatch } from 'react-redux'
import { setAgent } from '../changeAgent'
import { useParams } from "react-router-dom"
import {Link} from "react-router-dom"
import "./MapList.css"

const MapList = ({idNum}) => {
  const agentVal = useSelector((state) => state.agentChange.agentSelected)
  const dispatch = useDispatch()
  const { id } = useParams()
  let choiceAgent = []
  // let agent = AgentsList.filter((Qagent) => {return Qagent.AgentName == id})
  // let agentMap = agent[0].Maps
  dispatch(setAgent(id))
  // console.log(agentVal)

  const [agents, setAgents] = useState([]);

  const fetchAgents = () => {
    
    return fetch(`http://localhost:5000/${id}/map`)
          .then((response) => response.json())
          .then((data) => setAgents(data));
  }

  useEffect(() => {
    fetchAgents();
  },[])

   if ( agents == []){
  
   } else {
    
    
    return (
      <>
      <div className='MapList'>
        {
          agents.map((map) => {
          return (
            
            <Link to = {`/${id}/${map.link}/`}><MapCard key={map.name} mapname={map.name} mapimg={map.image}></MapCard></Link>
          )})}
          
      </div>
      </>
    )
   }
  
}

export default MapList