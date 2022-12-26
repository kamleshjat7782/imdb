import React from 'react'
import { Link,} from 'react-router-dom'

function Header() {
  return (
    <>
          <nav className='navbar'>
        <div className="logo">
          <a href="/">IMDB</a>
        </div>
        <ul className='manu'>
          <li><Link to='/'>Home</Link></li>
          <li><Link to='./movie'>movies</Link></li>
          <li><Link to='./movie/:id'>SingleMovie</Link></li>
          {/* <li><Link to='./project'>Project</Link></li> */}
          {/* <li><Link to='./new'>New</Link></li> */}
        </ul>
      </nav>
    </>
  )
}

export default Header;