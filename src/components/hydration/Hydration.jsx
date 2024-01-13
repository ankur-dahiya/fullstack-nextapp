import { useEffect, useState } from "react";

export default function Hydration() {
    // const [isClient,setIsClient] = useState(false);
    const [isClient,setIsClient] = useState(true);
    const a = Math.random();
    // useEffect(()=>{
    //     setIsClient(true);
    // },[])
  return (
    <div>
        <h3>Client vs Server side components:</h3>
        <p>all client side components by default will render on server side but not vice versa<br/>
        <p>all or any components inside a "use client" components will not become client component by default, only that component will become client component</p>
        - inorder to use browser events and hooks..component should be client side component do this by using "use client"(double quotes included) at top of component<br/>
        - server side components not always need to render on client side
        </p>
        <h3>Hydration errors:</h3>
        <p>It happens because next.js expects same renders on server and client side but if there's mismatch error will be thrown for example: rendering a random number will result in a hydration error because number will be different on server render and client render</p>
        <p>generated random no. at client side: {isClient?a:""}</p>
        <p suppressHydrationWarning>generated random no. at client side using suppressHydrationWarning: {isClient?a:""}</p>
        <h5>Three ways to solve hydration error: </h5>
        <p>1. using useEffect hook</p>
        <p>2. dynamic import</p>
        <p>3. using suppressHydrationWarning</p>
        <button onClick={()=>console.log("clicked")}>Click Me!!</button>
    </div>
  )
}
