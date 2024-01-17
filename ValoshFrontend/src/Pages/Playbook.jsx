import React,{useState, useEffect} from 'react'
import AgentsList from '../Database'
import { useSelector, useDispatch } from 'react-redux'
import { setAgent } from '../changeAgent'
import { useParams } from "react-router-dom"
import './Playbook.css'
const Playbook = () => {
    const agentVal = useSelector((state) => state.agentChange.agentSelected)
    const mapVal = useSelector((state) => state.mapChange.mapSelected)
    console.log(agentVal)
    const { id } = useParams()

    const [agents, setAgents] = useState([]);

    const fetchAgents = () => {
      
       return fetch(`http://localhost:5000/${agentVal}/map/${mapVal}/image`)
            .then((response) => response.json())
            
            .then((data) => setAgents(data));
    }
  
    useEffect(() => {
      fetchAgents();
    },[])

      console.log(agents[0].image)
      // if (mapSelected == []){
      //   null
      // } else {
      //   console.log(mapSelected)
      // }
      
      const mapimage = agents[0]?.image
    
      return (
    
        <>
            <h1>{id}</h1>
            <img src = {mapimage}/>
        </>
      )
    
    
    // let agent = AgentsList.filter((Qagent) => {return Qagent.AgentName == agentVal})
    // console.log(agent)
    // let agentMaps = agent[0].Maps
    // console.log(agentMaps)
    // let seletedMap = agentMaps.filter((Qmap) => {return Qmap.name == mapVal})
    // console.log(seletedMap)
    // let book = seletedMap[0].Books.filter((Qbook) => {return Qbook.Type == id})
    // console.log(book)
    // let imgSRC = book[0].plays
    // console.log(imgSRC)
  
}

export default Playbook