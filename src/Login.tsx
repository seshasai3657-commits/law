import React, { useState } from "react";
import Dashboard from "./Dashboard";

export default function Login() {

  const [loggedIn, setLoggedIn] = useState(false);

  if (loggedIn) {
    return <Dashboard />;
  }

  return (
    <div style={styles.page}>
      <div style={styles.box}>

        <h1>⚖ NyayaAI</h1>
        <p>Legal Research Assistant</p>

        <input placeholder="Username" style={styles.input} />
        <input type="password" placeholder="Password" style={styles.input} />

        <button
          style={styles.button}
          onClick={() => setLoggedIn(true)}
        >
          Login
        </button>

      </div>
    </div>
  );
}

const styles:any = {

page:{
height:"100vh",
display:"flex",
justifyContent:"center",
alignItems:"center",
background:"#1e293b"
},

box:{
background:"white",
padding:"40px",
borderRadius:"8px",
textAlign:"center",
width:"300px"
},

input:{
width:"100%",
padding:"10px",
margin:"10px 0"
},

button:{
padding:"10px",
width:"100%",
background:"#2563eb",
color:"white",
border:"none"
}

}