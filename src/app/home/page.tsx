import Image from "next/image";
import image from "@/img_0670-1.webp"
import image2 from "@/img_5578-1.webp"
import image3 from "@/bike.webp"
import image4 from "@/designer27.webp"
import image5 from "@/image_editor_output_image1258312890-1728326457430.webp"
import image6 from "@/dayafterdaytfourth.webp"
import Link from "next/link";
import Header from "@/components/Header/page";
import Footer from "@/components/Footer/page";

export default function Home() {
    return (

        <div >

            <Header/>
            <br />
            <div className="blogs">

            <Link href={"https://blackmoonlilith.art.blog/2024/09/30/the-devil-is-in-the-details/"}>
            <div className="firstBlog">
                <div className="firstChildContainer"><Image className="firstImage" src={image} alt=""></Image></div>

                <p className="heading-1"><b>The Devil is in the Details</b></p>
                <br />
                <p className="text-1">Her voice actually sounded a million miles away, maybe like an echo. Blinking several times, I thought about how I should answer her I had just explained to someone the other day about how everything may be all crazy on the </p>
                <br />
                <button className="btn-1">Read More</button>
            </div>
            </Link>

            <Link href={"https://riseandinspire.co.in/2024/10/04/the-nature-of-truth/"}>
            <div className="secondBlog">
                <div className="secondChildContainer"><Image className="secondImage" src={image2} alt=""></Image></div>

                <p className="heading-2"><b>The Nature of Truth</b></p>
                <br />
                <p className="text-2">I used to think that changing my mind was a sign of weaknes. Growing up, I held the belief that once you formed a strong opinion or built a solid set of values, sticking to them was a marker of strength. However, as time passed and</p>
                <br />
                <Link href={"https://riseandinspire.co.in/2024/10/04/the-nature-of-truth/"}><button className="btn-1">Read More</button></Link>
            </div>
            </Link>

            <Link href={"https://neptunesky.com/2024/10/02/the-cabin/"}>
            <div className="thirdBlog">
                <div className="thirdChildContainer"><Image className="thirdImage" src={image3} alt=""></Image></div>

                <p className="heading-3"><b>The Cabin</b></p>
                <br />
                <p className="text-3">The car stopped and the foster family guy pointed. “Well, here we are,” he said. “That’s their house.” I wouldn’t call it so much a house as a shack. It was back in the woods quite a ways and the roof was covered in pine needles. The dirt</p>
                <br />
                <Link href={"https://neptunesky.com/2024/10/02/the-cabin/"}><button className="btn-3">Read More</button></Link>
            </div>
            </Link>

            <Link href={"https://wiwohka.blog/2024/10/06/when-now/"}>
            <div className="fourthBlog">
                <div className="fourthChildContainer"><Image className="fourthImage" src={image4} alt=""></Image> </div>

                <p className="heading-4"><b>When, now?</b></p>
                <br />
                <p className="text-4">What I find rather hilarious about answering this prompt is all my answers seem to be running in reverse, as far as my age and maturity are concerned. Back in the day, when everyone my age was playing computer games, I was</p>
                <br />
                <Link href={"https://wiwohka.blog/2024/10/06/when-now/"}><button className="btn-4">Read More</button></Link>
            </div>
            </Link>

            
            <div className="blogs-row-2">

            <Link href={"https://mymindspeaks98.wordpress.com/2024/10/07/533/"}>
                <div className="fifthBlog">
                    <div className="fifthChildContainer"><Image className="fifthImage" src={image5} alt="" ></Image></div>

                    <p className="heading-5"><b>Artists: Imagining The Extraordinary</b></p>
                    <br />
                    <p className="text-5">Some of my favorite artists include: Sculptors: I am in awe of the ancient temple sculptures, which are intricately carved and depict stories from the Puranas. Many of these </p>
                    <br />
                    <Link href={"https://mymindspeaks98.wordpress.com/2024/10/07/533/"}><button className="btn-5">Read More</button></Link>
               </div>
            </Link>

            <Link href={"https://eyedancers.wordpress.com/2024/09/30/transitions-but-not-endings/"}>
                <div className="sixthBlog">
                    <div className="sixthBlogContainer"> <Image className="sixthImage" src={image6} alt=""></Image></div>

                    <p className="heading-6"><b>Transitions (But Not Endings)</b></p>
                    <br />
                    <p className="text-6">I am always amazed at the passing of time, the inexorable march of years that move forward with the precision of a finely crafted watch, day after day, month after month, year after year</p>
                    <br />
                    <br />
                    <Link href={"https://eyedancers.wordpress.com/2024/09/30/transitions-but-not-endings/"}> <button    className="btn-6">Read More</button></Link>
                </div>
            </Link>

            </div>

            </div>

            <Footer/>
            
        </div>
    )
};