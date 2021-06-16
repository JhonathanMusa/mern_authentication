import { useState } from 'react'

export default function useToggle(initialState) {
    const [newState, setToggle] = useState(initialState)

    const handleToggle = () => {
        setToggle(!newState)
        console.log(newState);
    }
    return { newState, handleToggle }
}
