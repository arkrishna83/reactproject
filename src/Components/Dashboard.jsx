import React from 'react'
import { Link, Outlet} from "react-router-dom"

function Dashboard() {
  return (
    <div>
      <h1>DashBoard</h1>
      <nav>
        <ul>
            <li><Link to="profile">Profile</Link></li>
            <li><Link to="settings">Settings</Link></li>
        </ul>
      </nav>

    <Outlet/>

    </div>
  )
}

export default Dashboard
