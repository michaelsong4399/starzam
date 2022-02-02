import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Navbar() {
    return (
        <div className="sticky top-0 flex items-center justify-between py-4 bg-dark ">
            {/* Left */}
            <Link href="/">
                <a className="ml-[5vw] mr-[3vw] text-[4vw] md:text-[2.5vw] text-pink font-title">
                    Starzam
                </a>
            </Link>
            {/* Right */}
            <div className="flex items-center text-[3vw] lg:text-[1.5vw] ml-[3vw] mr-[5vw] text-white font-subtitle">
                <Link href="/background">
                    <a className="ml-[1vw] mr-[1vw] transition-all hover:transition-all hover:text-pink">
                        Background
                    </a>
                </Link>
                <Link href="/method">
                    <a className="ml-[1vw] mr-[1vw] transition-all hover:transition-all hover:text-pink">
                        Method
                    </a>
                </Link>
                <Link href="/impact">
                    <a className="ml-[1vw] mr-[1vw] transition-all hover:transition-all hover:text-pink">
                        Impact
                    </a>
                </Link>
                <Link href="/people">
                    <a className="ml-[1vw] mr-[1vw] transition-all hover:transition-all hover:text-pink">
                        People
                    </a>
                </Link>
                <a
                    className="text-[3.5vw] lg:text-[2vw] ml-[1vw] mr-[1vw] transition-all hover:transition-all hover:text-pink"
                    target="_blank"
                    href="https://github.com/michaelsong4399/starzam"
                    rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                </a>
            </div>
        </div>
    );
}

export default Navbar;
