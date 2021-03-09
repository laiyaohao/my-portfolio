import React from "react";
import { SocialIcon } from "react-social-icons";

export default function SocialBar() {
    return (
        <footer className="bg-black">
            <div className="container mx-auto flex justify-center">
                <SocialIcon url="https://www.linkedin.com/in/yao-hao-lai/" 
                className="inline-flex items-center py-3 px-3 my-6 mx-4" 
                target="_blank" fgcolor="#fff" style={{ height:35, width:35 }}/>
                <SocialIcon url="https://github.com/laiyaohao" className="inline-flex items-center py-3 px-3 my-6 mx-4" 
                target="_blank" fgcolor="#fff" style={{ height:35, width:35 }}/>
                
            </div>
        </footer>
    );
}