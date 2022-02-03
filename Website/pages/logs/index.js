import Navbar from "../../components/frame/Navbar.js";
import Footer from "../../components/frame/Footer.js";

export default function Logs() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <div className="static bg-dark h-auto text-left pt-[10vh] pb-[5vh] px-[10vw] border-b-2 border-solid border-pink">
                <div className="text-pink font-title text-[10vw] md:text-[8vw] lg:text-[6vw] ">
                    Logs
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[3vh] pb-[3vh] px-[10vw] border-t-2 border-solid border-white">
                <a
                    href="/logs/6"
                    className="text-white font-title text-[2rem] hover:text-pink transition-all">
                    Log[6]: Semester Presentation
                </a>
                <div className="text-white font-title text-[1rem] ">
                    February 2, 2022
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[3vh] pb-[3vh] px-[10vw] border-t-2 border-solid border-white">
                <a
                    href="/logs/5"
                    className="text-white font-title text-[2rem] hover:text-pink transition-all">
                    Log[5]: Algorithm Creation
                </a>
                <div className="text-white font-title text-[1rem] ">
                    January 6, 2022
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[3vh] pb-[3vh] px-[10vw] border-t-2 border-solid border-white">
                <a
                    href="/logs/4"
                    className="text-white font-title text-[2rem] hover:text-pink transition-all">
                    Log[4]: Meeting with Dr. Marc Hon
                </a>
                <div className="text-white font-title text-[1rem] ">
                    December 20, 2021
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[3vh] pb-[3vh] px-[10vw] border-t-2 border-solid border-white">
                <a
                    href="/logs/3"
                    className="text-white font-title text-[2rem] hover:text-pink transition-all">
                    Log[3]: Data & Procedure Plan
                </a>
                <div className="text-white font-title text-[1rem] ">
                    November 10, 2021
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[3vh] pb-[3vh] px-[10vw] border-t-2 border-solid border-white">
                <a
                    href="/logs/2"
                    className="text-white font-title text-[2rem] hover:text-pink transition-all">
                    Log[2]: Assembling Background, Purpose, and Implication
                </a>
                <div className="text-white font-title text-[1rem] ">
                    October 27, 2021
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[3vh] pb-[3vh] px-[10vw] border-t-2 border-solid border-white">
                <a
                    href="/logs/1"
                    className="text-white font-title text-[2rem] hover:text-pink transition-all">
                    Log[1]: Update Project Plan
                </a>
                <div className="text-white font-title text-[1rem] ">
                    October 26, 2021
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[3vh] pb-[3vh] px-[10vw] border-t-2 border-solid border-white">
                <a
                    href="/logs/0"
                    className="text-white font-title text-[2rem] hover:text-pink transition-all">
                    Log[0]: Project Initiation
                </a>
                <div className="text-white font-title text-[1rem] ">
                    October 18, 2021
                </div>
            </div>
            <Footer />
        </div>
    );
}
