import { useState } from "react";
import { Octokit } from "@octokit/core";

function Footer() {
    const [version, setVersion] = useState("");
    async function getVersion() {
        const octokit = new Octokit();
        await octokit
            .request("GET /repos/{owner}/{repo}/releases", {
                owner: "michaelsong4399",
                repo: "starzam",
            })
            .then((res) => {
                setVersion(res.data[0]["tag_name"]);
            });
    }

    function ReleaseVersion() {
        getVersion();
        return (
            <a
                className="transition-all hover:transition-all hover:text-pink"
                href={
                    "https://github.com/michaelsong4399/starzam/releases/tag/" +
                    version
                }>
                {version}
            </a>
        );
    }

    return (
        <div className="flex items-center justify-between py-6 border-t-2 border-pink bg-dark">
            {/* Left */}
            <div></div>
            {/* Right */}
            <div className="flex items-center text-[3vw] lg:text-[1.5vw] ml-[3vw] mr-[5vw] text-white font-subtitle">
                <span className="ml-[1vw] mr-[1vw] transition-all ">
                    Starzam <ReleaseVersion />
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
