import Navbar from "../../components/frame/Navbar.js";
import Footer from "../../components/frame/Footer.js";
import Scroller from "../../components/frame/Scroller.js";

export default function LogPage() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <div className="static bg-dark h-auto text-left pt-[10vh] pb-[3vh] px-[10vw] border-b-2 border-solid border-pink">
                <div className="text-white font-title text-[3rem] ">
                    Log[5]: Algorithm Creation
                </div>
                <div className="text-white font-title text-[2rem] ">
                    January 6, 2022
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[5vh] pb-[3vh] px-[10vw] border-solid border-pink">
                <div className="text-white font-title text-[2rem] pb-[5vh]">
                    Over winter break, coded the entire ML algorithm with data
                    preprocessing
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        Code is viewable in Github.
                    </div>
                </div>
            </div>
            <Scroller
                currnum={5}
                prev="Log[4]: Meeting with Dr. Marc Hon"
                next="Log[6]: Semester Presentation"
            />
            <Footer />
        </div>
    );
}
