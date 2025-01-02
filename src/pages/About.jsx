import React, { useEffect, useState } from "react";
import { skills, experiences } from "../constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import CTA from "../components/CTA";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="blue-gradient_text font-semibold drop-shadow-sm">
          Alvin
        </span>
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          Software Engineer based in Malaysia, specializing in mobile app
          developement.
        </p>
      </div>

      <div className="py-10 flex flex-col">
        <h3 className="subhead-text">My Skills</h3>
        <div className="mt-16 flex flex-wrap gap-12 justify-center">
  {skills.map((skill, index) => (
    <div
      key={index}
      className="circle-container w-28 h-28 flex justify-center items-center bg-gradient-to-r from-blue-500 to-purple-500 shadow-lg relative group"
    >
      <img
        src={skill.imageUrl}
        alt={skill.name}
        className="w-1/2 h-1/2 object-contain"
      />
      
      {/* Tooltip */}
      <div className="skill-tooltip absolute bottom-0 left-0 w-full text-center bg-black text-white p-2 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        {skill.name}
      </div>
    </div>
  ))}
</div>

      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>I worked with company like...</p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experiences) => (
              <VerticalTimelineElement
                key={experiences.company_name}
                date={experiences.date}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experiences.icon}
                      alt={experiences.company_name}
                      className={`${
                        experiences.company_name === "Uncle Don's Restaurants"
                          ? "w-[90%] h-[90%]" // Larger size for Uncle Don's
                          : experiences.company_name ===
                            "Manjung Badminton Club"
                          ? "w-[75%] h-[75%]" // Larger size for Manjung Badminton Club
                          : experiences.company_name === "Tealive"
                          ? "w-[80%] h-[80%]" // Larger size for Tealive
                          : "w-[60%] h-[60%]" // Default size for others
                      } object-contain rounded-full`}
                    />
                  </div>
                }
                iconStyle={{ background: experiences.iconBg }}
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experiences.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experiences.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium font-base"
                    style={{ margin: 0 }}
                  >
                    {experiences.company_name}
                  </p>
                </div>
                <ul className="my-5 list-disc ml-5 space-2">
                  {experiences.points.map((point, index) => (
                    <li
                      key={`experiences-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />
      <CTA />
    </section>
  );
};

export default About;
