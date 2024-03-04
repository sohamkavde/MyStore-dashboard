import React from 'react'
import Header from './Header/Header';
import Sidebar from './Sidebar/Sidebar';
import admin from './css/admin.module.css';

function Admin(props) {
  return (
    <>
      <div className={admin.head}>
        <div className={admin.sidebar} id='sidebar'>
          <Sidebar />
        </div>
        <div className={admin.header}>
          <Header />
          <div style={{ height: "500px",padding:"2%" }}>
            {props.main}
          </div>
        </div>
      </div>
    </>
  )
}

export default Admin;
