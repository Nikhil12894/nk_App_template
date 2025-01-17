import TextToBold from "../../components/textToBold";
import {
  IconMapPin,
  IconCalendarMonth,
} from "@tabler/icons-react";
interface CVEducationProps {
  title: string;
  schools: {
    school: string;
    degree: string;
    dates: string;
    location: string;
    gpa: string;
  }[];
}
export const CVEducation = (education: CVEducationProps) => {
  return (
    <div>
      <h2 className="text-lg lg:text-2xl text-teal-600 mt-4">
        {education.title}
      </h2>
      <hr className="w-full h-[.3rem] bg-teal-600  mb-2" />
      {education.schools.map((edu, $index) => (
        <div key={$index}>
          <h3 className="text-xs lg:text-lg">{edu.degree}</h3>
          <h4 className="text-xs lg:text-lg text-teal-600">{edu.school}</h4>
          <div className="flex justify-between text-muted-foreground">
            <span className="flex text-xs lg:text-lg items-center">
              <IconCalendarMonth className="h-4 w-4 mr-2" />
              {edu.dates}
            </span>
            <span className="flex text-xs lg:text-lg items-center">
              <IconMapPin className="h-4 w-4 mr-2" />
              <TextToBold>{edu.location}</TextToBold>
            </span>
          </div>
          <div>
            <span className="text-xs lg:text-lg text-wrap text-muted-foreground">
              {edu.gpa}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};
