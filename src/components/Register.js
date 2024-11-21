import React, { useEffect, useState } from 'react'

export default function Register() {
  var[count,setcount]=useState(100);
  var[name,setname]=useState("shivani")
  // when you visited the component useEffect hook get called
  // if we are changing state variable then use Effect will be recalled
  // useEffect(()=>{
  //     console.log("useEffect",count,name);
  // });

  // use effect with empty array called only once 
  // useEffect(()=>{
  //       console.log("useEffect",count,name);
  //   },[]);

  //  this is useEffect with conditional variable i.e name
  //   useEffect(()=>{
  //     console.log("useEffect",count,name);
  // },[name]);

  useEffect(()=>{
    console.log("useEffect",count,name);
    return()=>{
      console.log("Im leaving");
    }
});
  function f1(){
    // alert("Register");
    setcount(count + 100);
  }
  function f2(){
   
    setname("Gyatri");
  }
  return (
    <div className='container'>
      <h1>State Variable</h1>
      <p>
        {count}
      </p>
      <button onClick={f1}>Submit</button>
      <p>{name}</p>
      <button onClick={f2}>Change Name</button>
    </div>
  )
}
