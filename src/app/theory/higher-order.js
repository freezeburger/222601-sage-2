// Higher Order Function
// Function qui retourne une fonction utilisable paramétrée

/*
function setPercent (percent){
    return function(price){
        return price + price / percent
    }
}
*/


const setPercent = percent => price =>  price + ( price * percent / 100) ;

const add50 = setPercent(50);
const add10 = setPercent(10);

console.log(
    add50(100),
    add10(100)
);

// Higher Order Component
// Function qui retourne une COMPONENT utilisable paramétré

const MyComponent = props => (
        <>
        <code>{props.text}</code>
        <br />
        <p>{props.label}</p>
        </>
    )

const setText = (Component, text )=> props => <Component {...props} text={text} />

export const BobComponent = setText(MyComponent, 'Bob');
