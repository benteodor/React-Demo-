const Counter = (props) => {
    return (
<div>
    <p>Counter: {props.counter}</p>
    <button onClick={clickHandler}>Increase by 1</button>
    <p>Counter: {counter}</p>
    <button onClick={clickDecrease}>Decrease by 1</button>
</div>
    );
}
 
export default Counter;