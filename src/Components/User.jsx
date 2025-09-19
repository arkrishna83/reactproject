import React from 'react'
import { useParams } from 'react-router-dom'


function User() {
    const {id} =useParams();
    return (
        <div>
            <h3>User Page for : {id}</h3>
        </div>
  )
}

export default User
