import logo from './logo.svg';
import './App.css';

// function App() {
//   function myFunction() {
//     alert('You clicked me!');
//   }
//   return (
//     <button onClick={myFunction}>
//       Click me
//     </button>
//   );
// }


// function App(){
//   return(
//     <button onClick={function handleClick() {
//       alert('you clicked me')
//     }}>
//     </button>
//   );
// }


// Using Arrow Functions

function App(){
  return(
    <button onClick={() => {
      alert('you clicked me')
    }}> Click me
    </button>
  );
}



export default App;
