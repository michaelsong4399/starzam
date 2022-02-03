import Navbar from "../../components/frame/Navbar.js";
import Footer from "../../components/frame/Footer.js";
import Scroller from "../../components/frame/Scroller.js";

export default function LogPage() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <div className="static bg-dark h-auto text-left pt-[10vh] pb-[3vh] px-[10vw] border-b-2 border-solid border-pink">
                <div className="text-white font-title text-[3rem] ">
                    Log[3]: Data & Procedure Plan
                </div>
                <div className="text-white font-title text-[2rem] ">
                    November 10, 2021
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[5vh] pb-[3vh] px-[10vw] border-solid border-pink">
                <div className="text-white font-title text-[2rem] pb-[5vh]">
                    Data
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        Light Curves from MAST (~200000 stars)<br></br>
                        Matching labels from kepler stellar 17.csv.gz (~200000
                        stars)<br></br>
                        Unlabeled light curves (~12000 stars)
                    </div>
                </div>
                <div className="text-white font-title text-[2rem] pb-[5vh]">
                    Procedure
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        Part 1: Replicate (Hinners et al., 2018) <br></br>Part
                        2: Improve Classification with Starzam Fourier Transform
                        + Asteroseismology Feature Extraction <br></br>Part 3:
                        Complete Unfinished Kepler Datasets (3200 out of 200000
                        stars)
                    </div>
                </div>
            </div>
            <Scroller
                currnum={3}
                prev="Log[2]: Update Project Plan"
                next="Log[4]: Meeting with Dr. Marc Hon"
            />
            <Footer />
        </div>
    );
}
