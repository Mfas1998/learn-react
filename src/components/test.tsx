import React from 'react'

const Test = () => {

    const loggedin=true;

//conditonal rendering
   
    //1- using if\else statement

        // if(loggedin){

        // return(
        //     <div>welcome</div>
        // )}

        // else{
        //     return(
        //     <div>you need to log in</div>
        // )}


   return(
    <>
    {/* 2-using ternary operator  */}
     {/* <div>{loggedin?'welcome':'you need to log in'}</div> */}

    {/* 3-using && logical operator */}
     {/* { loggedin && (<div>welcome</div>)} */}
   

   
    </>
   )
}

export default Test