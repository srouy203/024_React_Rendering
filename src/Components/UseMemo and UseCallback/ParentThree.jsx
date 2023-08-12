    import React, { /* useCallback, */ useMemo, useState } from 'react';
    import MemoizedChildThree from './ChildThree';

    const ParentThree = () => {
        const [count, setCount] = useState(0);
        const [name, setName] = useState("Dara007");

        const person = {
            fname: "Ang",
            lname: "LeangSrouy"
        }

        // eslint-disable-next-line
        const memoizedPerson = useMemo(()=> person, []);

        // const handleClick = () => {};

        // const memoizedHandleClick = useCallback(handleClick, []);

        console.log("ParentThree render!");

        return (
            <div>
                <button onClick={() => setCount(c => c + 1)}>Count - {count}</button>
                <button onClick={() => setName("Sem Kunthea")}>Change name</button>
                <MemoizedChildThree name={name} person={memoizedPerson}/>
            </div>
        )
    }

    export default ParentThree