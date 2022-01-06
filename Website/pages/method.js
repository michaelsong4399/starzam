import Navbar from "../components/frame/Navbar.js";
import Footer from "../components/frame/Footer.js";

export default function Method() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <div className="static bg-dark h-screen text-center pt-[20vh]"></div>
            <Footer />
        </div>
    );
}
