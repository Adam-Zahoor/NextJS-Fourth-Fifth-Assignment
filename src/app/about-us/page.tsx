import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export default function About() {
    return (
        <div>
            <Header/>
            <br />
            <br />
            <p className="about"><b>About Us :</b></p>
            <br />
            <p className="aboutLine">Simple, we post blogs from people living around the world</p>
            <br />
            <Footer/>
        </div>
    )
}