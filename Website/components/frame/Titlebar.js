function Titlebar({ title }) {
    return (
        <div className="static bg-dark h-auto text-left pt-[10vh] pb-[5vh] px-[10vw] border-b-2 border-solid border-pink titlebar">
            <div className="text-pink font-title text-[10vw] md:text-[8vw] lg:text-[6vw] ">
                {title}
            </div>
        </div>
    );
}

export default Titlebar;
