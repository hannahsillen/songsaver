import React from "react"
import { Link, Outlet } from "react-router-dom"

function Aboutme(){
    return( 
        <main>
            <h2>About Me</h2>
            <p>Hi my name is Hannah and I am 18 years old I make this website as a school project for Winc Acedemy</p>
            <p>I choose to do this study and make these project because I like to code</p>
            <p>this project is almost fully written in JavaScript React this is the acception with the essential HTML file</p>
            <p>I am happy that i have learned how to code and understand how to start this project</p>
            <Link to="./app"> about me </Link>
            <Outlet />
        </main>
    )
        
        
}

export default Aboutme