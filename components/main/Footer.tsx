import React from "react";
import {
    RxGithubLogo,
    RxLinkedinLogo,
} from "react-icons/rx";

const Footer = () => {
    return (
        <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px] z-[20]">
            <div className="w-full flex flex-col items-center justify-center m-auto">
                <div className="w-full h-full flex flex-row items-start justify-around flex-wrap border-t border-[#7042f861] pt-10">
                    
                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Quick Links</div>
                        <a href="#about" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white">
                            <span className="text-[15px] ml-[6px]">About me</span>
                        </a>
                        <a href="#skills" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white">
                            <span className="text-[15px] ml-[6px]">Skills</span>
                        </a>
                        <a href="#projects" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white">
                            <span className="text-[15px] ml-[6px]">Projects</span>
                        </a>
                    </div>

                    <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
                        <div className="font-bold text-[16px]">Socials</div>
                        <a href="https://linkedin.com/in/karachi-thanmayi-6666263a5" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white">
                            <RxLinkedinLogo />
                            <span className="text-[15px] ml-[6px]">LinkedIn</span>
                        </a>
                        <a href="https://github.com/thanmayi-4505" target="_blank" rel="noopener noreferrer" className="flex flex-row items-center my-[15px] cursor-pointer hover:text-white">
                            <RxGithubLogo />
                            <span className="text-[15px] ml-[6px]">GitHub</span>
                        </a>
                    </div>
                </div>

                <div className="mb-[20px] text-[15px] text-center mt-10">
                    &copy; Karachi Thanmayi. All rights reserved
                </div>
            </div>
        </div>
    );
};

export default Footer;