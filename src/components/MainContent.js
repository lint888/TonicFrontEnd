import React from "react";
import Hero from "./Hero";
import Featured from "./Featured";

const MainContent = () => {
    return (
        <div className="h-screen bg-[#393943]">
            <Hero />

            <Featured />

        </div>
    );
};

export default MainContent;