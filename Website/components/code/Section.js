import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";

function CodeSection({ code, title, subtitle }) {
    return (
        <div className="static bg-dark h-auto text-left py-[5vh] px-[5vw]">
            <div className="text-white font-title text-[3rem]">{title}</div>
            <div className="text-white font-subtitle text-[1.5rem] ">
                {subtitle}
            </div>
            <SyntaxHighlighter
                className="mt-[1vh]"
                language="python"
                style={atomOneDark}>
                {code}
            </SyntaxHighlighter>
        </div>
    );
}
export default CodeSection;
