import React from 'react'
import { useGlobalContext } from '../context/context';

function Search() {
    const{query, setQuery, error} = useGlobalContext()
  return (
    <>
    <div className='search-page'>
        <form onSubmit={(event) => event.preventDefault()}>
            <input type='text' placeholder='Enter Movie Name'
            value={query}
            onChange ={(e) =>{setQuery(e.target.value)}}
            />
        </form>
        <div className='error-msg'>
            <h2>{error.show && error.msg}</h2>
        </div>
    </div>
    
    </>
  )
}

export default Search;
































// import React from 'react'
// // import { useGlobalContext } from '../context/context';

// function Search() {
//     // const[query, setQuery,isError] = useGlobalContext();
//   return (
//     <>
//     <div>
//         hello
//         <form onSubmit={(event) => event.preventDefault()} >
//             {/* <input type='text' value={query} onChange = {(e) => {setQuery(e.target.value)}} placeholder= "Enter Movie Name"></input> */}
//         </form>
//         <div>
//           {/* {isError.show && isError.msg} */}
//         </div>
//     </div>
//     </>
//   )
// }

// export default Search;