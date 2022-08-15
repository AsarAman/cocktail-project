import React from 'react'
import {Link} from 'react-router-dom'

const Error = () => {
  return (
    <div className='loading'>
        <p>Oop's You Are At The Wrong Place</p>
        <Link className='error-btn btn' to='/'>Back Home</Link>
    </div>
  )
}

export default Error