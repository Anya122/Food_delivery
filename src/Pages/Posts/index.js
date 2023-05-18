
import {useState} from "react";

function Posts() {
    const [count, setCount] = useState(0)

     const plus = () => {
        setCount(count + 1)
     }

    return (
        <div className="h">
            <h1>Страница с постами</h1>
            {count}

            <button onClick={plus}>Увеличить</button>
        </div>

        
    )
}

export default Posts;