import React from 'react'
import { useGlobalContext } from '../context'
import CockTail from './CockTail'
import Loading from './Loading'


const CockTailList = () => {
    const {cocktails, loading} = useGlobalContext()
    if(loading){
        return <Loading/>
    }
    if(cocktails.length < 1){
        return (
            <div className='no-result'>
             <p className='no-cocktail'>No cocktail matches your search</p>
             
             </div>
             
        )

    }
  return (
    <div >
        <h1 className='main-title'>CockTails</h1>
        <div className='cocktail-items'>
            {cocktails.map((item)=>{
                return <CockTail key={item.id} {...item}/>
            })}
        </div>
    </div>
  )
}

export default CockTailList