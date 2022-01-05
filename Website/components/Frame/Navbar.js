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
                <Link href="/method">
                    <a className="ml-[1vw] mr-[1vw] transition-all hover:transition-all hover:text-pink">
                        Method
                    </a>
                </Link>
                <Link href="/method">
                    <a className="ml-[1vw] mr-[1vw] transition-all hover:transition-all hover:text-pink">
                        Impact
                    </a>
                </Link>
                <Link href="/method">
                    <a className="ml-[1vw] mr-[1vw] transition-all hover:transition-all hover:text-pink">
                        People
                    </a>
                </Link>
                <Link href="/method">
                    <a className="ml-[1vw] mr-[1vw] transition-all hover:transition-all hover:text-pink">
                        <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon>
                    </a>
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
