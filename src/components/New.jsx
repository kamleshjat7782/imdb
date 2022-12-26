import React from 'react'
import { useGlobalContext } from '../context/context';

function New() {
    const{query, setQuery, error} = useGlobalContext()
  return (
    <>
    <div>
        <form onSubmit={(event) => event.preventDefault()}>
            <input type='text' placeholder='Enter Movie Name'
            value={query}
            onChange ={(e) =>{setQuery(e.target.value)}}
            />
        </form>
        <div>
            {error.show && error.msg}
        </div>
    </div>
    
    </>
  )
}

export default New;