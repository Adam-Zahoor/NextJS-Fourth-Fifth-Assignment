import React from "react";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export default function Contact() {
    return (
        <div>
            <Header/>
            <br />
            <br />
            <p className="email"><b>Email:</b></p>
            <p className="emailAddress">adamzahoor18@gmail.com</p>
            <br />
            <br />
            <Footer/>
        </div>
    )
}