import React, { useCallback, useEffect, useState } from "react";
import "./styles.css";

export default function App() {
    const [count, setCount] = useState(() => {
        console.log("test");
        return +localStorage.getItem("countKey") !== null
            ? +localStorage.getItem("countKey")
            : 0;
    });
    const [name, setName] = useState("");

    const incrementCount = useCallback(() => {
        setCount((count) => {
            let a = count + 1;
            localStorage.setItem("countKey", a);
            return a;
        });
    }, []);

    return (
        <div className="App">
            <input type="text" onChange={(e) => setName(e.target.value)} />
            {name}
            <CountItem count={count} incrementCount={incrementCount} />
            <button onClick={incrementCount}>Increment</button>
        </div>
    );
}

const CountItem = React.memo(function CountItem({ count = 0, incrementCount }) {
    console.log("sdfsdfdsfs");
    // useEffect(() => {
    //   console.log("sdf");
    // }, [incrementCount]);

    return (
        <>
            <h1>{count}</h1>
            <button onClick={incrementCount}>Increment child</button>
        </>
    );
});
