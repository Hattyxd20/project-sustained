import React from "react";
import dataSet from "@/data/set.json";

const AboutSet = () => {
  const { aboutSET, aboutME, aboutEEE, aboutECE, aboutCE } = dataSet;
  return (
    <div className="px-5 lg:px-10 py-10">
      <div className="container mx-auto">
        <div className="flex flex-col gap-3 items-center justify-center">
          <h3>{aboutSET.title}</h3>
          <p>{aboutSET.content}</p>
          <img src={aboutSET.image} alt={aboutSET.title} />
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-5">
          <h3>{aboutME.title}</h3>
          <p>{aboutME.content}</p>
          <img src={aboutME.image} alt={aboutME.title} />
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-5">
          <h3>{aboutEEE.title}</h3>
          <p>{aboutEEE.content}</p>
          <img src={aboutEEE.image} alt={aboutEEE.title} />
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-5">
          <h3>{aboutECE.title}</h3>
          <p>{aboutECE.content}</p>
          <img src={aboutECE.image} alt={aboutECE.title} />
        </div>

        <div className="flex flex-col gap-3 items-center justify-center mt-5">
          <h3>{aboutCE.title}</h3>
          <p>{aboutCE.content}</p>
          <img src={aboutCE.image} alt={aboutCE.title} />
        </div>
      </div>
    </div>
  );
};

export default AboutSet;
