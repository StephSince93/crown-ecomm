import React, { Component, useMemo, useState, useCallback } from "react";

// const US_TO_EURO = 0.92;

// const RandomTests = () => {
//   const [count, setCount] = useState(0);
 
//   const increment = useCallback(() => {
// 	setCount(count + 1);
//   }, [count]);
//    return (
// 	<div>
//   	<button onClick={increment}>Increment</button>
//   	<p>Count: {count}</p>
// 	</div>
//   );
// }
// class RandomTests extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { list: ["Item1", "Item2"] };
//   }
//   addItem() {
//     const newItem = `Item${this.state.list.length + 1}`;
//     this.state.list.push(newItem);
//     this.setState({ list: this.state.list });
//   }
//   render() {
//     return (
//       <div>
//         <button onClick={this.addItem.bind(this)}>Add item</button>
//         <ul>
//           {this.state.list.map((item) => (
//             <li key={item}>{item}</li>
//           ))}
//         </ul>
//       </div>
// 	);
//   }
// }
// https://stackoverflow.com/a/54713679/6000966
// How to log changes from state changes since logging after wont display
// class RandomTests extends React.Component {
//     state = { count: 0 };
//    handleClick = () => {
//       this.setState({ count: this.state.count + 1 }, () => {
//         console.log(`Count: ${this.state.count}`);
//       });
//     };
//    render() {
//       return (
//         <div>
//           <h1>Count: {this.state.count}</h1>
//           <button onClick={this.handleClick}>Click me!</button>
//         </div>
//       );
//     }
//   }
// const RandomTests = () => {
//     const numbers = [1, 2, 3, 4, 5];
//   const doubledNumbers = useMemo(() => numbers.map((n) => n * 2), []);
//  return (
// 	<div>
//   	{doubledNumbers.map((number) => (
//     	<p key={number}>{number}</p>
//   	))}
// 	</div>
//   );
// }
//  class RandomTests extends React.Component {
//     state = { count: 0 };
//    handleClick = () => {
//       setTimeout(() => {
//         this.setState({ count: this.state.count + 1 });
//       }, 0);
//       this.setState({ count: this.state.count + 1 });
//     };
//    render() {
//       return (
//         <div>
//           <h1>Count: {this.state.count}</h1>
//           <button onClick={this.handleClick}>Click me!</button>
//         </div>
//       );
//     }
//   }
    // Use Id instead of Index React
    // https://blog.anja-stricker.de/why-using-index-as-key-in-reactjs-map-function-can-cause-problems-and-how-to-fix-them
    // const items = [
    //     { id: 1, text: "Item 1" },
    //     { id: 2, text: "Item 2" },
    //   ];
    //   const listItems = items.map((item) => <li key={item.id}>{item.text}</li>);
    //   return <ul>{listItems}</ul>;
//  }
const RandomTests = () => {
    // Timer Coding challenge
    const [time, setTime] = useState(0);
    const [interval, addInterval] = useState(null);
    const startTime = () => {
        if(interval) return;
        const int = setInterval(() =>{
            // https://stackoverflow.com/questions/53024496/state-not-updating-when-using-react-state-hook-within-setinterval
            // https://overreacted.io/making-setinterval-declarative-with-react-hooks/
            setTime(time => time + 1);
        }, 1000);
        addInterval(int);
    }
    const stopTime = () => {
        clearInterval(interval);
    }
    const resetTime = () => {
        clearInterval(interval);
        setTime(0);
    }
  return (
    <div>
        <h1>Stopwatch</h1>
        <button onClick={startTime}>Start</button>
        <button onClick={stopTime}>Stop</button>
        <button onClick={resetTime}>Reset</button>
        <p>{time}</p>
    </div>
  )
}
//     const [value, setValue] = useState("");
//  function handleChange(event) {
// 	setValue(event.target.value);
//   }
 
//   return (
// 	<div>
//   	<input type="text" value={value} onChange={handleChange} />
//   	<p>You entered: {value}</p>
// 	</div>
//   );
//     // Input Currency and convert to additional currency
//     const [getCurrency, setCurrency] = useState({ 'US': 0, 'EU': 0});
//     // const [getConvertedCurrency, setConvertedCurrency] = useState(0);
//     // US to EURO
//     const setInputCurrency = (e) => {
//         const { value } = e.target;
//         console.log(value);
//         setCurrency({...getCurrency, US:value});
//     }

//     const convertCurrency = () => {
//         // setConvertedCurrency(getCurrency * US_TO_EURO);
//         const conversion = getCurrency.US * US_TO_EURO;
//         setCurrency({...getCurrency, EU:conversion});
//     }
//    return (
//     <div>
//     <h3>Type US currency, will display in Euros</h3>
//     <input type="number" onChange={setInputCurrency}></input><br/>
//     <button type="button" onClick={convertCurrency}>Update Amount</button>
//     <p>${getCurrency.EU}</p>
//     </div>
//    )
// }

export default RandomTests;