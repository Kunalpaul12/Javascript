import React ,{useState} from 'react'

export const useStateExample = () => {

    const [count, setCount] = useState(0)

    return(
        <div>
            <p> your click count is :- {count} </p>
            <button onClick={() => setCount(count + 1)}></button>
        </div>
    )

}