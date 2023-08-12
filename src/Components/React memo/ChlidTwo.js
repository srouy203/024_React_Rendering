import React from 'react'

const ChildTwo = ({name}) => {

    console.log("ChildTwo render!")

  return (
    <>
      <div>Hello {name}</div>
    </>
  )
}

export default ChildTwo

export const MemoizedChildTwo = React.memo(ChildTwo);