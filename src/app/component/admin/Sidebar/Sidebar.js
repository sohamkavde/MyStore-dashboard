import React from 'react'
import sidebar from '../css/Sidebar.module.css';
import Accordino from './accordino';
function Sidebar() {
  return (
    <div className={sidebar.sidebar}>
      <div className={sidebar.heading}>
         <b className='display-6'>MyStore</b>
      </div>
      <div className={sidebar.accordino}>
        <div>
          <Accordino/>
    
        </div>
      </div>
    </div>
  )
}

export default Sidebar;
