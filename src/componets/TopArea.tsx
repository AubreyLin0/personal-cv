import { Fragment, useContext } from "react";
import { TOP_MESSAGE } from "../constants";
import ContentLanguage from "../store";
import Text from "../elements/Text";

const TopArea = () => {
  const { language } = useContext(ContentLanguage);
  return (
    <div>
      <div className="bg-base-white flex px-2 py-20">
        <img
          src="src/assets/top-image.svg"
          alt="backgroundPic"
          className="flex-1 border"
        />
        <div className="flex-1 flex flex-col justify-center pl-10">
          <Text text={TOP_MESSAGE["first"][language]} size="medium" />
          <Text text={TOP_MESSAGE["second"][language]} size="large" />
          <img src="src/assets/marker.svg" alt="marker" className="w-36" />
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
