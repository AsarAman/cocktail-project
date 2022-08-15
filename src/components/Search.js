import React from 'react'
import { useGlobalContext } from '../context'

const Search = () => {
    const {setSearchTerm}= useGlobalContext()

    const searchValue = React.useRef('')
    React.useEffect(()=>{
        searchValue.current.focus();

    },[])
    const handleSubmit= (e)=>{
        e.preventDefault()
    }
    const searchCocktail = ()=>{
        setSearchTerm(searchValue.current.value)

    }

  return (
    <div className='search'>
        <h1>
            search your favourite cocktail
        </h1>
        <form onSubmit={handleSubmit}>
            <input  ref={searchValue} onChange={searchCocktail} type='text' id='name' name='name' placeholder='search'></input>
        </form>
    </div>
  )
}

export default Search