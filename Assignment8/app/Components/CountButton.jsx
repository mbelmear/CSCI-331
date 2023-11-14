import { useState, useEffect } from "react";
import "./CountButton.css";

export default function Counter(props) {
    // this is a hook, we use it so the DOM will register a change
    let [count, setCount] = useState(0);

    // when button is pressed, we add one to count
    function handleClick() {
        setCount(count + 1 * props.mult);
    }

    // count button only goes to 10
    function rollOverCount() {
        if (count > 10) {
            setCount(0);
        }
    }

    // call rollOverCount when count array changes
    useEffect(rollOverCount, [count]);

    // can only return one element at a time, so wrap it in a large element
    return (
        <div>
            <button onClick={handleClick}>{props.name}</button>
            <div>Count: {count}</div>
        </div>
    );
}