import Link from "next/link";
import React from "react";

export default function Footer() {
    return (
        <footer>
            <div className="footer">
                <ul>
                    <Link href={"/Home"}><li>Home</li></Link>
                    
                    <Link href={"/About"}><li>About</li></Link>
                    
                    <Link href={"/Contact"}><li>Contact</li></Link>
                </ul>
            </div>
        </footer>
    )
}