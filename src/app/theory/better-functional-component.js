import React from "react"
import { ActionTypes, useStore, useTimer } from "../logic"


export const MyBetterFunctionnalComponent = props => {

    const inputRef = React.useRef();
    const updateInput =  () => {
        let time = Date.now();
        inputRef.current.value = time;
    }
    
   useTimer( updateInput );
   
   const [ time, dispacth] = useStore (true, 'time');

    return (
        <form>
        <input type="text" readOnly="readonly" value={ time }/>
        <button type="button" 
            onClick={ 
            () => dispacth({type:ActionTypes.TIME_UPDATE})
            }>
                Update Store Time
        </button>
        <br />
        <input type="text" ref={ inputRef } />

    </form>
    )

}