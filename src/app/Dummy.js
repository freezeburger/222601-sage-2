import React from 'react';

let time = 1

setInterval(() => {
        time++
}, 1000);

const Dummy = () => {

    const [count, setCount]= React.useState(0);

    const handleClick = () => setCount(count + 1);

    return (
        <React.Fragment>
            <button onClick={handleClick}>Count : {count} - {time}</button>
        </React.Fragment>
    );
};

export default Dummy