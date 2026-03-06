import React, { useState } from "react";

export default function LegalSearch(){

const [query,setQuery] = useState("");

return(

<div>

<h2>🔎 Legal Case Search</h2>

<input
placeholder="Search legal cases..."
value={query}
onChange={(e)=>setQuery(e.target.value)}
style={{padding:"8px",width:"300px"}}
/>

<button style={{marginLeft:"10px"}}>Search</button>

</div>

)

}