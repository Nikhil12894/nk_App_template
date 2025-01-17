import React from "react";
import { data } from "../../assets/data";

import { CVCertification } from "./CVCertification";
import { CVEducation } from "./CVEducation";
import { CVExtCertification } from "./CVExtCertification";
import { CVHeader } from "./CVHeader";
import { CVLanguage } from "./CVLanguage";
import { CVSkill } from "./CVSkils";
import { CVStrengths } from "./CVStrengths";
import { CVSummery } from "./CVSummery";
import { CVWorkExp } from "./CVWorkxExp";
import { useMediaQuery } from "../../hooks/use-media-query";

const Portfolio: React.FC = () => {
  const workExp = data.workExp;
  const summery = data.summery;
  const education = data.education;
  const certifications = data.certifications;
  const display = useMediaQuery("(min-width: 1024px)");

  return (
    <>
      <div className="flex justify-center">
        <div className="w-full mr-1 ml-1 md:w-[80%] md:mr-4 md:ml-4 mt-4 mb-4 sm:text-base">
          <div>{data.header && <CVHeader header={data.header} />}</div>
          <div>
            <div className="grid grid-cols-6 gap-4">
              <div className="lg:col-start-1 lg:col-span-4 gap-4 col-span-6">
                {display ? (
                  <CVWorkExp
                    title={workExp.title}
                    positions={workExp.positions}
                  />
                ) : (
                  <CVSummery title={summery.title} points={summery.points} />
                )}

                <CVCertification
                  title={certifications.title}
                  certifications={certifications.certifications}
                />
                <CVEducation
                  title={education.title}
                  schools={education.schools}
                />
              </div>
              <div className="lg:col-end-7 lg:col-span-2 col-span-6">
                {!display ? (
                  <CVWorkExp
                    title={workExp.title}
                    positions={workExp.positions}
                  />
                ) : (
                  <CVSummery title={summery.title} points={summery.points} />
                )}
                <CVSkill
                  title={data.skills.title}
                  skills={data.skills.skills}
                />
                <CVLanguage
                  title={data.languages.title}
                  languages={data.languages.languages}
                />
                <CVStrengths
                  title={data.strengths.title}
                  points={data.strengths.strengths}
                />
              </div>
            </div>
          </div>
          <div className="flex justify-between">
            {/* <Button variant="outline">Cancel</Button>
        <Button>Deploy</Button> */}
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-[80%] mr-4 ml-4 mt-4 mb-4 sm:text-base">
          <h2 className="text-lg lg:text-2xl text-teal-600 mt-4">
            Online Certification
          </h2>
          <hr className="w-full h-[.3rem] bg-teal-600  mb-2" />
          <CVExtCertification />
        </div>
      </div>
    </>
  );
};

export default Portfolio;
