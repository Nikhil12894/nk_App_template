import { IconCalendarMonth, IconMapPin } from "@tabler/icons-react";
import TextToBold from "../../components/textToBold";

export interface CVWorkExpProps {
  title: string;
  positions: {
    jobTitle: string;
    compony: {
      displayName: string;
      href: string;
    };
    dates: {
      start: string;
      end: string;
    };
    location: string;
    bulletPoints: string[];
    projects: {
      title: string;
      projects: {
        title: string;
        description: string;
      }[];
    };
  }[];
}

export const CVWorkExp = (workExp: CVWorkExpProps) => {
  return (
    <div>
      <h2 className="text-lg lg:text-2xl text-teal-600">{workExp.title}</h2>
      <hr className="w-full h-[.3rem] bg-teal-600" />
      {workExp.positions.map((position) => (
        <div key={position.jobTitle}>
          <h3 className="text-xs lg:text-lg">{position.jobTitle}</h3>
          <h4 className="text-xs lg:text-lg text-teal-600">
            {position.compony.displayName}
          </h4>
          <div className="flex justify-between text-muted-foreground">
            <span className="flex text-xs lg:text-lg items-center">
              <IconCalendarMonth stroke={2} className="h-4 w-4 mr-2" />
              {position.dates.start} - {position.dates.end}
            </span>
            <span className="flex text-xs lg:text-lg items-center">
              <IconMapPin stroke={2} className="h-4 w-4 mr-2" />
              <TextToBold>{position.location}</TextToBold>
            </span>
          </div>
          <div>
            <ul className="text-xs lg:text-lg text-wrap list-disc text-muted-foreground ml-4">
              {position.bulletPoints.map((point, $index) => (
                <li key={$index}>
                  <TextToBold>{point}</TextToBold>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs lg:text-lg mt-2">
              {position.projects.title}
            </h4>
            <ul className="text-xs lg:text-lg text-wrap list-disc text-muted-foreground ml-4">
              {position.projects.projects.map((project, $index) => (
                <li key={$index}>
                  <span>
                    <b>{project.title} :</b>{" "}
                    <TextToBold>{project.description}</TextToBold>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
