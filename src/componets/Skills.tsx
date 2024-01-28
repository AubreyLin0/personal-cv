import { useContext } from "react";
import Text from "../elements/Text";
import ContentLanguage from "../store";
import SectionHeading from "./SectionHeading";
import { SKILL_SUBTITLE } from "../constants";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import Tooltip from "@mui/material/Tooltip";

const Skills = () => {
  const { language } = useContext(ContentLanguage);
  return (
    <div className="py-32 flex flex-col items-center gap-3 border">
      <SectionHeading heading="Skills" />
      <Text size="small" text={SKILL_SUBTITLE[language]} />
      <ul className="grid grid-cols-6 gap-x-3 gap-y-10 place-items-center w-[40vw] mt-10">
        <li className="col-span-2">
          <Tooltip title="React" placement="top" arrow>
            <FontAwesomeIcon icon={faReact} size="6x" />
          </Tooltip>
        </li>
        <li className="col-span-2">
          <Tooltip title="Next.js" placement="top" arrow>
            <img
              width="96"
              height="96"
              src="https://img.icons8.com/color/96/nextjs.png"
              alt="nextjs"
            />
          </Tooltip>
        </li>
        <li className="col-span-2">
          <Tooltip title="Vite" placement="top" arrow>
            <img width="95" height="95" src="src/assets/vite.svg" alt="vite" />
          </Tooltip>
        </li>
        <li className="col-[2_/_span_2]">
          <Tooltip title="Typescript" placement="top" arrow>
            <img
              width="90"
              height="90"
              src="https://img.icons8.com/ios/90/typescript.png"
              alt="typescript"
            />
          </Tooltip>
        </li>
        <li className="col-[4_/_span_2]">
          <Tooltip title="Jest" placement="top" arrow>
            <img
              width="80"
              height="80"
              src="https://img.icons8.com/external-tal-revivo-light-tal-revivo/80/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-light-tal-revivo.png"
              alt="jest"
            />
          </Tooltip>
        </li>
      </ul>
    </div>
  );
};

export default Skills;
