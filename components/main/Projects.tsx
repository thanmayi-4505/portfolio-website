import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center py-20 z-[20]"
            id="projects"
        >
            <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20 pb-10">
                My Projects
            </h1>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 items-stretch justify-center max-w-[1200px]">
                <ProjectCard
                    src="/NextWebsite.png"
                    title="AI-Based Crop Disease Detection"
                    description="Engineered a deep learning classification model using Python, TensorFlow, and a Convolutional Neural Network (CNN) architecture. Trained on image datasets to accurately identify and classify agricultural diseases, supporting data-driven farming solutions."
                />
                <ProjectCard
                    src="/SpaceWebsite.png"
                    title="Modern Personal Portfolio"
                    description="Designed and deployed a highly responsive portfolio web application utilizing Next.js, React, and Tailwind CSS. Implemented smooth scroll animations with Framer Motion and modern modular component structures to highlight web development abilities."
                />
            </div>
        </div>
    );
};

export default Projects;