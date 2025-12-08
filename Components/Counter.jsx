import React from 'react'

function Counter() {
    var [c,setC]=React.useState(0);
     function inc(){
        setC(c+1);
     }
      function dec(){
        setC(c-1);
     }
  return (
    <div className='border border-4 border-info text-white p-3 m-3 bg-primary'>
      <h1>Counter:{c}</h1>
      <button className="btn btn-success  m-2" 
      onClick={()=>{
        inc();
      }}>Increment</button>
      <button className="btn btn-success"
      onClick={()=>{
        dec();
      }}>Decrement</button>
    </div>
  )
}

export default Counter;
