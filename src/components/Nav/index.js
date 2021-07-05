import React from 'react';
import './navElements.css'

function Nav(props) {
  return(
      <div className='nav-container'>
     <div className="Titulo typing-animation">
     <p>Procure seu anime favorito</p>
     </div>
      <div>
          {props.children}
      </div>
      </div>
  );
}

export default Nav;