import React, { useState } from 'react'

const initialState = ["Sok", "Dara"];

const ArrayUseState = () => {
    const [name, setName] = useState(initialState);

    const handleChangeName = () => {
        // name.push("Ang");
        // name.push("LeangSrouy");
        // setName(name);

        const data = [...name];
        data.push("Ang");
        data.push("LeangSrouy");
        setName(data)
    }

    console.log("Re-render component!")

  return (
    <div>
        <button onClick={()=> handleChangeName()}>Change name</button>
        {
            name.map(name => (
                <div key={name}>{name}</div>
            ))
        }
    </div>
  )
}

export default ArrayUseState