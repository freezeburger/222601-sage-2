import React from 'react';

const Dummy = () => {

    const [count, setCount]= React.useState(0);

    const handleClick = () => setCount(count + 1);

    return (
        <React.Fragment>
            <button onClick={handleClick}>Count : {count}</button>
        </React.Fragment>
    );
};

export default Dummy