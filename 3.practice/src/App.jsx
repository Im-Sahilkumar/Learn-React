import With from './without'
function Hello (){//it is java script code.
  const username = "sahil";
  let x=10;
  let y=20;
  
  return(
    // it is html code.
  <div>
    <h2>{x*y}</h2>// ye hai jo html ke  andr javascript ki file  likh skte hai jisko jsx volte hai.
    <h3>{10+20+30}</h3>
    <h1>{username}</h1>
    //function calling
    <button onclick={()=>alert("hello")}> Click me </button>
    <p>Hello jsx</p> 
  </div>
  )
}
export default Hello;