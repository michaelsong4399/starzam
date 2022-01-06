function Footer() {
    return (
        <div className="flex items-center justify-between py-6 border-t-2 border-pink bg-dark">
            {/* Left */}
            <div></div>
            {/* Right */}
            <div className="flex items-center text-[3vw] lg:text-[1.5vw] ml-[3vw] mr-[5vw] text-white font-subtitle">
                <span className="ml-[1vw] mr-[1vw] transition-all ">
                    Starzam v1.0.0
                </span>
                |
                <span className="ml-[1vw] mr-[1vw] transition-all ">
                    MIT License
                </span>
                |<span className="ml-[1vw] mr-[1vw] transition-all ">2022</span>
                |
                <a
                    target="_blank"
                    href="https://yihong.org"
                    rel="noopener noreferrer"
                    className="ml-[1vw] mr-[1vw] transition-all hover:transition-all hover:text-pink">
                    © Yihong Song
                </a>
            </div>
        </div>
    );
}

export default Footer;
