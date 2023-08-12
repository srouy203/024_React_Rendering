import React, { useState } from 'react'

const initialState = {
    fname: "Ang",
    lname: "LeangSrouy"
}

const ObjectUseState = () => {

    const [name, setName] = useState(initialState)

    const handleClick = () => {
        // name.fname = "Sok";
        // name.lname = "Dara";
        // setName(name);

        const data = {...name};
        data.fname = "Sok";
        data.lname = "Dara";
        setName(data)
    }

    console.log("Re-render");

  return (
    <div>
        <button onClick={()=> handleClick()}>{name.fname}{name.lname}</button>
    </div>
  )
}

export default ObjectUseState