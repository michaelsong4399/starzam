import Navbar from "../components/frame/Navbar.js";
import Footer from "../components/frame/Footer.js";

export default function Background() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <div className="static bg-dark h-auto text-left pt-[10vh] pb-[5vh] px-[10vw] border-b-2 border-solid border-pink">
                <div className="text-pink font-title text-[10vw] md:text-[8vw] lg:text-[6vw] ">
                    Background
                </div>
            </div>
            <div className="static bg-dark h-auto text-left py-[10vh] px-[10vw]">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="lg:flex lg:items-center pb-[5vh]">
                        {/* add image */}
                        <div className="lg:translate-x-[-18vw] lg:translate-y-[8rem] lg:scale-150">
                            <img
                                src="/images/sun.png"
                                alt="background"
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                    <div className="lg:flex lg:items-center pb-[5vh]">
                        <div>
                            <div className="text-white font-title text-[3rem] ">
                                Stellar Properties
                            </div>
                            <div className="text-white font-subtitle text-[1.5rem] ">
                                Stars tell us the history and evolution of the
                                universe. <br></br>We learn about stars through
                                star properties, which include Surface Gravity,
                                Effective Temperature, and Metallicity.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="static bg-dark h-auto text-left py-[10vh] px-[10vw]">
                <div className="lg:grid lg:grid-cols-2">
                    <div className="lg:flex lg:items-center pb-[5vh]">
                        <div>
                            <div className="text-white font-title text-[3rem] ">
                                Spectroscopy
                            </div>
                            <div className="text-white font-subtitle text-[1.5rem] ">
                                Spectoscopy is currently the most effective
                                method in finding stellar properties. However,
                                the properties of 14,000 stars are beyond its
                                capabilities
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="flex flex-col text-center">
                            <div>
                                <div className="text-white font-title text-[8vw] lg:text-[6vw]">
                                    205,512
                                </div>
                                <div className="text-white font-subtitle text-[3vw] md:text-[2vw] ">
                                    Stars Found by Kepler
                                </div>
                            </div>
                            <div>
                                <div className="text-white font-title text-[8vw] lg:text-[6vw]">
                                    191,449
                                </div>
                                <div className="text-white font-subtitle text-[3vw] md:text-[2vw] ">
                                    Labeled by Spectroscopy
                                </div>
                            </div>
                            <div>
                                <div className="text-pink font-title text-[8vw] lg:text-[6vw]">
                                    14,063
                                </div>
                                <div className="text-white font-subtitle text-[3vw] md:text-[2vw] ">
                                    Spectroscopy Unavailable
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}