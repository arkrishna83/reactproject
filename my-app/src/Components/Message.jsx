import React, { useState } from 'react'

function Message() {
  
  const [blShow, setVisibility]=useState(false);
    return (
        <div>
        <button onClick={()=>setVisibility(!blShow)}>
            {blShow? "Hide" :"Show"} Text
        </button>
        {blShow && <p>THis is text can be toggled.</p>}
        </div>
  )
}

export default Message
