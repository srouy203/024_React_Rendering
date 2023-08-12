import React from 'react'

const ChildThree = ({name, person}) => {

    console.log("ChildThree render!")

  return (
    <>
      <div>Hello {name} {person.fname} {person.lname}</div>
    </>
  )
}

export default ChildThree

export const MemoizedChildThree = React.memo(ChildThree);