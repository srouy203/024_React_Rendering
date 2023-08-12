import React, { useState } from 'react';
import MemoizedChildTwo from './ChlidTwo';

const ParentTwo = () => {
    const [count, setCount] = useState(0);
    const [name, setName] = useState("Dara007");

    console.log("ParentTwo render!")

    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            <button onClick={() => setName("Sem Kunthea")}>Change name</button>
            <MemoizedChildTwo name={name}/>
        </div>
    )
}

export default ParentTwo