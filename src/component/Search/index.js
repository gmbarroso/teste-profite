import React from 'react'

// import search from '../../img/search.png';

import './style.css'

const Search = () => (
  <div>
    <form action="/action_page.php">
      <input className="formSearch" type="text" placeholder="O que você está procurando?" name="search" />
      {/* <button type="submit"><i class="fa fa-search"></i></button> */}
    </form>
  </div>
)

export default Search


