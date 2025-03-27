import Batsmen from './Batsment';
import Counter from './Counter';
import reactLogo from './assets/react.svg';
import './App.css'

function App() {
  
  const handleClick = () => {
    alert('I am clicked');
  }

  const handle3 = () => alert('Click 3');
  const handAdd = (num) => {
    const newAdd = num + 5;
    alert(newAdd);
  }
  return (
    <>
      <h3>React</h3>   
      <Batsmen></Batsmen>
      <Counter></Counter>
      {/* <button onclick="handleClick()">Click me</button>  */}

      <button onClick={handleClick}>Click me</button>
      <button onClick={function handle(){
        alert('Click 2');
      }}>Click 2</button>
      <button onClick={handle3}>Click 3</button>
      <button onClick={() => alert('Click 4')}>Click 4</button>
      <button onClick={() => handAdd(10)}>Click Add 5</button>
    </>
  )
}

export default App
