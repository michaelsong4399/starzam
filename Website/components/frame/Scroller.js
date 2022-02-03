import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";

function Scroller({ currnum, prev, next }) {
    return (
        <div className="grid grid-cols-2 bg-dark h-auto text-left pt-[10vh] pb-[10vh] px-[10vw]">
            {/* if prev is not none */}
            {prev ? (
                <a
                    href={"/logs/" + (currnum - 1)}
                    className="justify-front hover:translate-y-[-8px] transition-all flex">
                    <div className="text-pink text-[4rem] pr-[3vw]">
                        <FontAwesomeIcon icon={faCaretLeft}></FontAwesomeIcon>
                    </div>
                    <div>
                        <div className="text-pink font-title text-[2rem]">
                            <div className="text-left">Previous</div>
                            <div className="text-white font-title text-[1.5rem]">
                                {prev}
                            </div>
                        </div>
                    </div>
                </a>
            ) : (
                <div></div>
            )}
            {next ? (
                <a
                    href={"/logs/" + (currnum + 1)}
                    className="hover:translate-y-[-8px] transition-all flex ml-auto">
                    <div className="text-pink font-title text-[2rem]">
                        <div className="text-right">Next</div>
                        <div className="text-white text-right font-title text-[1.5rem]">
                            {next}
                        </div>
                    </div>

                    <div className="text-pink text-[4rem] pl-[3vw]">
                        <FontAwesomeIcon icon={faCaretRight}></FontAwesomeIcon>
                    </div>
                </a>
            ) : (
                <div></div>
            )}
        </div>
    );
}

export default Scroller;
