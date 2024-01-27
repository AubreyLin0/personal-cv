import { Fragment, useContext } from "react";
import { TOP_MESSAGE } from "../constants";
import ContentLanguage from "../store";
import Text from "../elements/Text";
import { LanguagesList } from "../types";

const TEXT_POSITION: LanguagesList = {
  EN: "left-[calc(67%-10px)] bottom-[calc(43%+5px)]",
  JA: "left-[calc(55%-10px)] bottom-[calc(43%+5px)]",
  TW: "left-[calc(68%-10px)] bottom-[calc(43%+5px)]",
};

const TopArea = () => {
  const { language } = useContext(ContentLanguage);
  return (
    <div>
      <div className="bg-base-white flex px-2 py-20">
        <img
          src="src/assets/top-image.svg"
          alt="top-image"
          className="flex-1"
        />
        <div className="flex-1 flex flex-col justify-center pl-10 gap-2">
          <Text text={TOP_MESSAGE["first"][language]} size="medium" />
          <Text
            text={TOP_MESSAGE["second"][language]}
            size="large"
            extraStyle="relative z-10"
          />
          <img
            src="src/assets/marker.svg"
            alt="marker"
            className={`w-32 absolute ${TEXT_POSITION[language]}`}
          />
          <Text text={TOP_MESSAGE["third"][language]} size="medium" />
        </div>

        {/* <div className="name">
          <h1>
            <FormattedMessage id="top.name" />
          </h1>
          <img className="topMarker" src="images/marker.svg" alt="marker" />
        </div>

        <p>
          <FormattedMessage id="top.job" />
        </p>
        <SNSLinks />
        <a className="btn touchBtn mt-3" type="button" href="#contact">
          Get In Touch <i className="fa-solid fa-arrow-right"></i>
        </a> */}
      </div>
      <div className="bg-wave block h-[200px] w-full"></div>;
    </div>
  );
};

export default TopArea;
