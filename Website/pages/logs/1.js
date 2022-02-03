import Navbar from "../../components/frame/Navbar.js";
import Footer from "../../components/frame/Footer.js";
import Scroller from "../../components/frame/Scroller.js";

export default function LogPage() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />

            <div className="static bg-dark h-auto text-left pt-[10vh] pb-[3vh] px-[10vw] border-b-2 border-solid border-pink">
                <div className="text-white font-title text-[3rem] ">
                    Log[1]: Update Project Plan
                </div>
                <div className="text-white font-title text-[2rem] ">
                    October 26, 2021
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[5vh] pb-[3vh] px-[10vw] border-solid border-pink">
                <div className="text-white font-title text-[2rem] pb-[5vh]">
                    Updated Project Idea
                    <div className="text-white font-subtitle text-[1.5rem] ">
                        Star Classification for Incomplete Light Curves using
                        Deep Learning and Asteroseismology
                    </div>
                </div>
                <div className="text-white font-title text-[2rem] pb-[5vh]">
                    Related Researches
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <a
                            className="hover:underline text-pink"
                            href="https://academic.oup.com/mnras/article/504/4/5327/5894933#248198424">
                            Machine Learning Kepler Exoplanet Validation
                        </a>
                    </div>
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <a
                            className="hover:underline text-pink"
                            href="https://www.researchgate.net/publication/335376321_Deep_Learning_Applied_to_the_Asteroseismic_Modeling_of_Stars_with_Coherent_Oscillation_Modes ">
                            Deep Learning on Asteroseismology
                        </a>
                        <br></br>
                        Modeled 7 pulsating stars, good agreement with past
                        results.
                    </div>
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <a
                            className="hover:underline text-pink"
                            href="https://www.researchgate.net/publication/335376321_Deep_Learning_Applied_to_the_Asteroseismic_Modeling_of_Stars_with_Coherent_Oscillation_Modes ">
                            Machine Learning Techniques for Stellar Light Curve
                            Classification
                        </a>
                        <br></br>
                        Simple Aperture Photometry (SAP) flux and Pre-Search
                        Data Conditioning (PDC) SAP flux. The PDC SAP versions
                        of the light curves remove instrumental variations and
                        noise in the data while preserving both stellar and
                        transiting exoplanet behavior. Therefore this is the
                        flux measurement used to construct the light curves.
                    </div>
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <a
                            className="hover:underline text-pink"
                            href="https://iopscience.iop.org/article/10.3847/1538-4365/229/2/30 ">
                            Kepler Star Classification Dataset
                        </a>
                    </div>
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <a
                            className="hover:underline text-pink"
                            href="https://iopscience.iop.org/article/10.3847/1538-4365/aab4f9 ">
                            Kepler Dataset 2
                        </a>
                    </div>
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <a
                            className="hover:underline text-pink"
                            href="https://arxiv.org/pdf/1609.04172.pdf ">
                            Gaia Data
                        </a>
                    </div>
                </div>
            </div>
            <Scroller
                currnum={1}
                prev="Log[0]: Project Initiation"
                next="Log[2]: Assembling Background, Purpose, and Implication"
            />
            <Footer />
        </div>
    );
}
