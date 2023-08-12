import React, { useState } from 'react';
// import ChildOne from './ChildOne';

const ParentOne = ({children}) => {
    const [count, setCount] = useState(0);
    console.log("ParentOne render!")
    return (
        <div>
            <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
            {/* <ChildOne/> */}
            {children}
        </div>
    )
}
export default ParentOne