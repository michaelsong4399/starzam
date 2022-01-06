import Navbar from "../components/frame/Navbar.js";
import Footer from "../components/frame/Footer.js";

export default function Home() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <div className="static bg-dark h-[100vh] text-center pt-[20vh]">
                <div className="text-pink font-title text-[14vw] md:text-[10vw] lg:text-[8vw] ">
                    Starzam.
                </div>
                <div className="text-white font-title text-[4vw] md:text-[3vw] lg:text-[2.5vw] ">
                    Star properties, measured from songs.
                </div>
            </div>
            <div className="static bg-dark text-center h-[10vh] pt-[2.5vh] md:h-[20vh] md:pt-[5vh] lg:h-[30vh] lg:pt-[10vh] px-[10vw]">
                <div className="text-pink font-title text-[3vw] md:text-[2vw] lg:text-[1.5vw] ">
                    “There is geometry in the humming of the strings. There is
                    music in the spacing of the spheres.”
                </div>
                <div className="text-right text-white font-title text-[3vw] md:text-[2vw] lg:text-[1.5vw] ">
                    — Pythagoras (569-490 BCE)
                </div>
            </div>
            <Footer />
        </div>
    );
}
