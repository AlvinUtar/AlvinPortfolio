import React from "react";
import { projects } from "../constants";
import { Link } from "react-router-dom";
import { arrow } from "../assets/icons";
import CTA from "../components/CTA";
import { expo1, expo2 } from "../assets/images";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Projects
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500 text-justify">
        <p>
          I've embarked on numerous projects throughout the years, but these are
          the ones I hold closest to my heart. Many of them are open-source, so
          if you come across something that piques your interest, feel free to
          explore the codebase and contribute your ideas for further
          enhancements. Your collaboration is highly valued!
        </p>
      </div>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full " key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="Project Icon"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500 text-justify">
                {project.description}
              </p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-blue-600 transform transition-all duration-300 hover:scale-110"
                >
                  Live Link
                </Link>
                {project.sublink && (
                  <Link
                    to={project.sublink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-blue-600 transform transition-all duration-300 hover:scale-110"
                  >
                    Sub Link
                  </Link>
                )}

                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain transform transition-all duration-300 hover:scale-110"
                />
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <div className="mt-20">
        <h2 className="head-text">Smart Nation Expo 2024</h2>
        <div className="mt-5 flex flex-wrap gap-16">
          <div className="lg:w-[400px] w-full">
            <img
              src={expo1}
              alt="Smart Nation Expo 2024 Photo 1"
              className="w-full h-auto rounded-xl object-cover"
            />
            <h4 className="mt-5 text-2xl font-poppins font-semibold">
              Franka Emika Robotic Arm
            </h4>
            <p className="mt-2 text-slate-500 text-justify">
              Exhibitors in Smart Nation Expo 2024 under (TM ONE), Franka Emika
              Robotic arm Figma dashboard creation. 3D modelling.
            </p>
          </div>
          <div className="lg:w-[400px] w-full">
            <img
              src={expo2}
              alt="Smart Nation Expo 2024 Photo 2"
              className="w-full h-auto rounded-xl object-cover"
            />
            <h4 className="mt-5 text-2xl font-poppins font-semibold">
              Tech Exhibition & Talk
            </h4>
            <p className="mt-2 text-slate-500 text-justify">
              Attend tech talk on Smart Farm, IOT solution
            </p>
          </div>
        </div>
      </div>

      <CTA />
    </section>
  );
};

export default Projects;
