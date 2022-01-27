import React from "react"
import { ActionTypes, store } from "../logic"


export const MyFunctionnalComponent = props => {

    const inputRef = React.useRef();
    const setIntervalOnMount = () => {

        const timerId = setInterval( () => {
            let time = Date.now();
            inputRef.current.value = time;
        } ,1000);

        // cleanup function
        const clearIntervalOnUnmount = () => clearInterval(timerId);
        return clearIntervalOnUnmount;
    }
    React.useEffect(  setIntervalOnMount );
    
    const [ render, setRender ] = React.useState({});
    React.useEffect( ()=>{
        const unsubscribe = store.subscribe( () => setRender({}) )
        return unsubscribe;
    })


    return (
        <form>
        <input type="text" readOnly="readonly" value={store.getState().time}/>
        <button type="button" 
            onClick={ 
            () => store.dispatch({type:ActionTypes.TIME_UPDATE})
            }>
                Update Store Time
        </button>
        <br />
        <input type="text" ref={ inputRef } />

    </form>
    )

}