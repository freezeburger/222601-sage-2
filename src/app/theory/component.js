import React from 'react';
import { ActionTypes, store } from '../logic';

export class MyClassComponent extends React.Component {

    constructor(props) {
        super(props); // Utile pour utiliser le mot clé "this";
        // this.tick = this.tick.bind(this)
    }

    // setState()
    state = 0;

    time = Date.now();
    timerId;
    unsubscribe;
    inputRef = React.createRef();

    componentDidMount() {
       this.timerId =  setInterval(this.tick, 1000);

       this.unsubscribe = store.subscribe( () => this.setState({}) );
    }

    componentWillUnmount() {
         clearInterval( this.timerId );
         
         this.unsubscribe();
     }

    tick = () => {
        this.time = Date.now();
        this.inputRef.current.value = this.time;
        console.log(this.time);
    }

    render() {
        return (
            <form>
                <input type="text" readonly="readonly" value={store.getState().time}/>
                
                <button type="button" 
                    onClick={ 
                    () => store.dispatch({type:ActionTypes.TIME_UPDATE})
                    }>
                        Update Store Time
                </button>

                <br />

                <input type="text" ref={this.inputRef} />

            </form>
        )
    }

}