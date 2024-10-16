import React from "react";
import Link from "next/link";

export default function Header() {
    return (
        <div>
            <div className="navBar">
                <Link href={"/home"}><div className="nameButton"><b>ADAM</b></div></Link>
            
                <div className="headerButtons">
                    <ul>
                        <Link href={"../home"}><li>Home</li></Link>
                    
                        <Link href={"../about-us"}><li>About</li></Link>
                    
                        <Link href={"../contact"}><li>Contact</li></Link>
                    </ul>
                </div>
            </div>
        </div>
    )
}