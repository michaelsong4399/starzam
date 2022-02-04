import Navbar from "../components/frame/Navbar.js";
import Footer from "../components/frame/Footer.js";

export default function Home() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <div className="static bg-dark h-[50vh] lg:h-[90vh] text-center pt-[20vh]">
                {/* Add image of kepler */}
                <div className="absolute top-[10vh] left-[5vw] md:top-[15vh] md:left-[8vw] w-[30%] h-[30%] md:w-[20%] md:h-[20%] z-0">
                    <a
                        href="https://archive.stsci.edu/missions-and-data/kepler"
                        className="">
                        <img
                            src="/images/kepler.png"
                            alt="Kepler"
                            className="transition duration-500 ease-in-out hover:scale-110"
                        />
                    </a>
                </div>
                <div className="text-pink font-title text-[14vw] md:text-[10vw] lg:text-[8vw]">
                    Starzam.
                </div>
                <div className="text-white font-title text-[4vw] md:text-[3vw] lg:text-[2.5vw]">
                    Star properties, measured from light curves.
                </div>
                <div className="grid grid-cols-2 pt-[2vh] w-[50vw] lg:w-[30vw] ml-auto mr-auto gap-2">
                    <a
                        href="https://github.com/michaelsong4399/starzam/releases"
                        rel="noopener noreferrer"
                        target="_blank">
                        <img
                            className="ml-auto mr-auto"
                            alt="GitHub tag (latest by date)"
                            src="https://img.shields.io/github/v/tag/michaelsong4399/starzam?label=Github&style=for-the-badge"></img>
                    </a>
                    <a
                        href="https://github.com/michaelsong4399/starzam/commits/master"
                        rel="noopener noreferrer"
                        target="_blank">
                        <img
                            alt="GitHub last commit"
                            src="https://img.shields.io/github/last-commit/michaelsong4399/starzam?style=for-the-badge"></img>
                    </a>
                </div>
            </div>
            <div className="static bg-dark h-[23vh] text-center md:h-[40vh]">
                <div className="text-white font-title text-[4vw] md:text-[3vw] lg:text-[2.5vw] pt-[2vh]">
                    Prediction Accuracy
                </div>
                <div className="grid grid-cols-3">
                    <div>
                        <div className="text-pink font-title text-[8vw] lg:text-[6vw]">
                            99.7%
                        </div>
                        <div className="text-white font-subtitle text-[3vw] md:text-[2vw] ">
                            Suface Gravity
                        </div>
                    </div>
                    <div>
                        <div className="text-pink font-title text-[8vw] lg:text-[6vw]">
                            76.9%
                        </div>
                        <div className="text-white font-subtitle text-[3vw] md:text-[2vw] ">
                            Effective Temperature
                        </div>
                    </div>
                    <div>
                        <div className="text-pink font-title text-[8vw] lg:text-[6vw]">
                            92.7%
                        </div>
                        <div className="text-white font-subtitle text-[3vw] md:text-[2vw] ">
                            Metallicity
                        </div>
                    </div>
                </div>
            </div>
            <div className="static bg-dark text-center h-[15vh] pt-[2.5vh] md:h-[20vh] md:pt-[5vh] lg:h-[30vh] lg:pt-[10vh] px-[10vw]">
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
