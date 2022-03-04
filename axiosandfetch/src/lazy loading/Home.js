import React,{Suspense}from 'react'

const  Admin= React.lazy(()=> import('./Admin'))
const Customer=React.lazy(()=>import('./Customer'))
function Home({user}) {
     if(user==="admin"){
         return(
             <Suspense fallback={<div>Loading Admin page............</div>}>
                <Admin/>
             </Suspense>
         )
     }
     else if(user=== 'customer'){
         return(
             <Suspense fallback={<div>Loading Customer page......</div>}>
                 <Customer/> 
             </Suspense>
         )
     }
    return (
    <div>
         <h1>This is a Home component</h1>
    </div>
  )
}

export default Home