import React from 'react'
import QueryCard from '../components/QueryCard'
import { useParams } from "react-router-dom"
import { useSelector, useDispatch } from 'react-redux'
import { setMap } from '../changeMap'
import maplist2 from '../Maps2nd'
import {Link} from "react-router-dom"
import './Page.css'
const MapChoice = () => {
  const { id } = useParams()

  const dispatch = useDispatch()

  let map = maplist2.filter((Qmap) => {return Qmap.mapname == id})
  let mapImage = map[0].mapimg

  const agentVal = useSelector((state) => state.agentChange.agentSelected)
  dispatch(setMap(id))



  return (
    <>
    <div className='Veiw'>
      <img className='BgImg' src={mapImage}/>
        <div className='DivCentre' >
          
            <div className='DivHoriz'>
            <Link to = {`/${agentVal}/${id}/Defense/`}><QueryCard  queryimg= 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/Solid_red.svg/2048px-Solid_red.svg.png' querytext='Defense'></QueryCard></Link>
            <Link to = {`/${agentVal}/${id}/Attack/`}><QueryCard queryimg= 'https://www.dictionary.com/e/wp-content/uploads/2016/01/paris-green-color-paint-code-swatch-chart-rgb-html-hex.png' querytext='Attack'></QueryCard></Link>
            </div>
        </div>
    </div> 
    </>
  )
}

export default MapChoice