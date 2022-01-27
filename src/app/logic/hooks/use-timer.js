import React from "react";

export const useTimer = ( callback = () => false, delay = 1000) => {

    React.useEffect(
        () => {
            const timerId = setInterval( callback, delay);
            return () => clearInterval(timerId)
        }
        , [callback, delay] )

}