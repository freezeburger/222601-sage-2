import React from "react";
import { store } from "..";

export const useStore = (subscription = false, slice = null) => {

    const [ render, setRender ] = React.useState({});

    let unsubscribe = () => false;

    React.useEffect( ()=>{
        if (subscription) unsubscribe = store.subscribe( () => setRender({}) );
        return unsubscribe;
    }, [subscription] )

    const state = (slice)  ? store.getState()[slice] : store.getState()
    return [
        state
       , store.dispatch
    ];
}