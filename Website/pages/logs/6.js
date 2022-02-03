import Navbar from "../../components/frame/Navbar.js";
import Footer from "../../components/frame/Footer.js";
import Scroller from "../../components/frame/Scroller.js";

export default function LogPage() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <div className="static bg-dark h-auto text-left pt-[10vh] pb-[3vh] px-[10vw] border-b-2 border-solid border-pink">
                <div className="text-white font-title text-[3rem] ">
                    Log[6]: Semester Presentation
                </div>
                <div className="text-white font-title text-[2rem] ">
                    February 2, 2022
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[5vh] pb-[3vh] px-[10vw] border-solid border-pink">
                <div className="text-white font-title text-[2rem] pb-[5vh]">
                    Semester Presentation PDF
                    <object
                        data="/images/Semester Presentation 3.pdf"
                        type="application/pdf"
                        width="100%"
                        height="500rem"></object>
                </div>
            </div>
            <Scroller currnum={6} prev="Log[5]: Algorithm Creation" next="" />
            <Footer />
        </div>
    );
}
