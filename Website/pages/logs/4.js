import Navbar from "../../components/frame/Navbar.js";
import Footer from "../../components/frame/Footer.js";
import Scroller from "../../components/frame/Scroller.js";

export default function LogPage() {
    return (
        <div className="absolute w-[100%]">
            <Navbar />
            <div className="static bg-dark h-auto text-left pt-[10vh] pb-[3vh] px-[10vw] border-b-2 border-solid border-pink">
                <div className="text-white font-title text-[3rem] ">
                    Log[4]: Meeting with Dr. Marc Hon
                </div>
                <div className="text-white font-title text-[2rem] ">
                    December 20, 2021
                </div>
            </div>
            <div className="static bg-dark h-auto text-left pt-[5vh] pb-[3vh] px-[10vw] border-solid border-pink">
                <div className="text-white font-title text-[2rem] pb-[5vh]">
                    Brief Notes on Meeting with Dr. Marc Hon
                    <div className="text-white font-subtitle text-[1.5rem] pb-[2vh]">
                        Delta nu related to pure sound speed of star<br></br>
                        Numax related to surface gravity<br></br>
                        Constrained by temperature, luminosity<br></br>
                        Hard to get age w/o using star models<br></br>
                        Construct simulation of star to the point of same
                        properties<br></br>
                        Age of model - compare to age of models stars<br></br>
                        TESS input catalogue created as an analogue to Kepler
                        <br></br>
                        Include ones in the Kepler input catalogue.<br></br>
                        Temperature and Radius has been estimated through
                        photometry.<br></br>
                        GAIA records movements and motion of stars<br></br>
                        Ability to measure distances and parallaxes of billions
                        of stars in galaxy<br></br>
                        Radius and Temperature tabulated in TESS catalog.
                        <br></br>
                        Nice data comes from Kepler<br></br>
                        TESS has many gaps and weird data.<br></br>
                        Red giants pulate at lower frequencies<br></br>
                        Depends a lot on the type of star.<br></br>
                        Depending on the variability, oscillations can tell{" "}
                        <br></br>
                        Difficult to come up with prediction that works for all
                        types of star<br></br>
                        Narrow down to a particular type of star<br></br>
                        Stars at different points exhibit different pulsations
                        <br></br>
                        Especially in the instability strip - excited by a very
                        specific mechanism - range of temperature<br></br>
                        As the sun gets old, it becomes a red giant and
                        eventually puff up. Oscillation frequencies get to
                        variable values. When instrument gets large, frequency
                        becomes very low. Structure is also different from Sun
                        <br></br>
                        Kepler great for solar like stars - long time series.{" "}
                        <br></br>
                        ML time-series struggle for high frequency signals
                        <br></br>
                        Depending on variability type, might vary in timescale
                        <br></br>
                        Vary super quickly<br></br>
                        Neural network to generalize<br></br>
                        Struggle with the fast trends<br></br>
                        Start working with red giants on frequency domain
                        <br></br>
                        The lower the numax, the larger the amplitude of
                        oscillations in light curve<br></br>
                        Lightkurve library is good<br></br>
                        Oscillation frequency shift for sun<br></br>
                        Some stars may be too quiet or too noisy.<br></br>
                        Solve using Kepler’s laws, compare to asteroseismology
                        <br></br>
                        Equal pay - accurate, very precise<br></br>
                        Depends on the quality of data.<br></br>
                        Look at smaller variability range of stars. Instead of
                        entire periodogram, individual peaks around numax.
                        <br></br>
                        Dominant feature is numax, teaching network how to infer
                        temperature from numax<br></br>
                        If we want to learn detailed stuff, we need to do
                        feature engineering - extract specific features
                        initially and then feed into a neural network. <br></br>
                        Use individual peaks - <br></br>
                        Mass, radius, surface gravity won’t be completely new
                        <br></br>
                        What is new - focus on effective temperature and
                        metallicity<br></br>
                        Temperature: photometry, spectroscopy<br></br>
                        Metalicity: <br></br>
                        Weak dependencies on deltanu and numax. No machine
                        learning, only plotted trend of numax vs. metallicity.
                        <br></br>
                        Haven’t used individual modes<br></br>
                        Precision comparable to measurements taken from other
                        photometry…<br></br>
                        Solar like Short cadence data<br></br>
                        Red Giant normal cadence data<br></br>
                        Red giant spectra look very clean, but then it becomes
                        much more complicated as it rise up the giant branch..
                        <br></br>
                        Not all the peaks correspond to the same thing<br></br>
                        Different peaks identify with different waves inside the
                        star. Peaks distributed differently<br></br>
                        Know which peaks correlate to which kind of waves.{" "}
                        <br></br>
                        If main sequence, interior stars’ insides don’t show
                        this level of complexity.<br></br>
                        Start learning about main sequence stars first - then
                        read red giants.<br></br>
                        Received: Main sequence stars, red giant stars list,
                        paper for gentle learning curve of observed things in
                        asteroseismology<br></br>
                        Difficulty - irregular timestamps<br></br>
                        Another thought - classification of variables in time
                        domain with irregular timestamp data<br></br>
                        Classification of stellar variability is increasingly
                        important in the future. <br></br>
                        RNN struggle with long sequences<br></br>
                        Most RNN researches use <br></br>
                        CNNs are maybe better/applicable to temporal data.
                        <br></br>
                        Deep neural networks<br></br>
                        Astronomy - have to find the right tool for the job.
                        Start simple, multilayer random forest, classification,
                        then NN.
                    </div>
                </div>
            </div>
            <Scroller
                currnum={4}
                prev="Log[3]: Data & Procedure Plan"
                next="Log[5]: Algorithm Creation"
            />
            <Footer />
        </div>
    );
}
