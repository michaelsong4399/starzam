import Navbar from "../components/Frame/Navbar.js";

export default function Home() {
    return (
        <div className="absolute w-screen">
            <Navbar />
            <div className="static bg-dark h-screen text-center pt-[20vh]">
                <div className="text-pink font-title text-[14vw] md:text-[10vw] lg:text-[8vw] ">
                    Starzam.
                </div>
                <div className="text-white font-title text-[4vw] md:text-[3vw] lg:text-[2.5vw] ">
                    Star properties, measured from songs.
                </div>
            </div>
        </div>
    );
}
