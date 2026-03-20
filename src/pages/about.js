// import React from 'react'

// export const about = () => {
//   return (
//     <div>about</div>
//   )
// }


import Nav from "../pages/nav"
// Props
export const Abdullah = (props) => {
  return (
    <div>
    <p>Name: {props.name} </p>
   <p> Age: {props.age}</p>
</div>
  )
}


export default function About() {
  return (
    <div>
<Nav/>
      <h1 className="flex justify-center m-10">About Page</h1>
<Abdullah name="Abdullah" age={18}/>
    </div>
  );


}