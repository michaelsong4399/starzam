import Navbar from "../components/frame/Navbar.js";
import Footer from "../components/frame/Footer.js";

export default function Method() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <div className="static bg-dark h-auto text-left pt-[10vh] pb-[5vh] px-[10vw] border-b-2 border-solid border-pink">
                <div className="text-pink font-title text-[10vw] md:text-[8vw] lg:text-[6vw] ">
                    Method
                </div>
            </div>
            <Footer />
        </div>
    );
}
