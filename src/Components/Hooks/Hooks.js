import React, { useRef } from 'react'

function Hooks() {
    const inputRef = useRef("new");

    const onClick = () => {
        console.log(inputRef.current.value);
    }
  return (
    <div>
        <h1>{inputRef.current.value}</h1>
        <input type="text" placeholder='Ex...' ref={inputRef}/>
        <button onClick={onClick}>Change Name</button>
    </div>
  )
}

export default Hooks