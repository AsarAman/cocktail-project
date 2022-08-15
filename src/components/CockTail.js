import React from 'react'
import {Link} from 'react-router-dom'

const CockTail = ({name,info,id,glass,image}) => {
    
  return (
    
    <div className='cocktail'>
        <div>
        <img src={image} alt={name}></img>
        </div>
        <div className='footer'>
            <p className='name'>{name}</p>
            <p className='glass'>{glass}</p>
            <p className='info'>{info}</p>
            <Link className='details-btn' to={`cocktail/${id}`}>Details</Link>
        </div>
        
    </div>
    
    
  )
  
}

export default CockTail