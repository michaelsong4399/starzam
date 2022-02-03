import Navbar from "../../components/frame/Navbar.js";
import Footer from "../../components/frame/Footer.js";
import Scroller from "../../components/frame/Scroller.js";

export default function LogPage() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />

            <div className="static bg-dark h-auto text-left pt-[10vh] pb-[3vh] px-[10vw] border-b-2 border-solid border-pink">
                <div className="text-white font-title text-[3rem] ">
                    Log[2]: Assembling Background, Purpose, and Implication
                </div>
                <div className="text-white font-title text-[2rem] ">
                    October 27, 2021
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[5vh] pb-[3vh] px-[10vw] border-solid border-pink">
                <div className="text-white font-title text-[2rem] pb-[5vh]">
                    Background
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <a
                            className="hover:underline text-pink"
                            href="https://archive.stsci.edu/files/live/sites/mast/files/home/missions-and-data/k2/_documents/MAST_Kepler_Archive_Manual_2020.pdf ">
                            Kepler Space Telescope
                        </a>
                        <br></br>
                        The Kepler mission was designed to survey a region of
                        the Milky Way galaxy to detect and characterize
                        Earth-size and smaller planets in or near the habitable
                        zone by using the transit method of planetary detection.
                        This was accomplished by observing changes in the
                        brightness of stars in the same patch of sky for 4 years
                        between May 2009 and May 2013.
                    </div>
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <a
                            className="hover:underline text-pink"
                            href="https://www.ee.columbia.edu/~dpwe/papers/Wang03-shazam.pdf">
                            Shazam
                        </a>
                        <br></br>
                        Shazam analyses the captured sound of a song and finds
                        the name of the song. based on an acoustic fingerprint
                        in a database of millions of songs
                    </div>
                </div>
                <div className="text-white font-title text-[2rem] pb-[5vh]">
                    Purpose & Implications
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <div className="text-pink">Influx of Data</div>
                        Hubble Space Telescope produced approximately 3 GB per
                        day. James Webb Space Telescope (JWST) expected to
                        produce approximately 57.5 GB per day (Beichman et al.
                        2014). Square Kilometer Array, which will be online in
                        2027, is predicted to produce on the order of 109 GB per
                        day It will generate data streams far beyond the total
                        Internet traffic worldwide. Impossible for humans to
                        pick out and sort through.
                    </div>
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <div className="text-pink">Hidden Features</div>
                        As shown by Shazam, many features might not be
                        recognizable by human researchers
                    </div>
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <div className="text-pink">
                            Incomplete & Wasted Data
                        </div>
                        As shown by Shazam, it is hard for humans or models to
                        recognize incomplete datasets. However,
                        specifically-trained neural networks can do that.
                    </div>
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        <div className="text-pink">
                            Machine Learning Application in Kepler Light Curves
                        </div>
                        Not much ML research has been applied on Kepler
                        datasets. Many related works in supernovae ML projects.
                    </div>
                </div>
            </div>
            <Scroller
                currnum={2}
                prev="Log[1]: Update Project Plan"
                next="Log[3]: Data & Procedure Plan"
            />
            <Footer />
        </div>
    );
}
