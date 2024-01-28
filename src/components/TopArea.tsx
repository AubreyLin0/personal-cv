import { Fragment, useContext } from "react";
import { TOP_MESSAGE } from "../constants";
import ContentLanguage from "../store";
import Text from "../elements/Text";
import { LanguagesList } from "../types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import RoundedButton from "../elements/button/RoundedButton";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Marker from "../elements/Marker";
import IconLinks from "./IconLinks";
import { animateScroll } from "react-scroll";

const TEXT_POSITION: LanguagesList = {
  EN: "left-[calc(38%-10px)] bottom-[calc(-27%+5px)]",
  JA: "left-[calc(3%-10px)] bottom-[calc(-27%+5px)]",
  TW: "left-[calc(40%-10px)] bottom-[calc(-27%+5px)]",
};

const TopArea = () => {
  const { language } = useContext(ContentLanguage);

  const scrollTo = () => {
    animateScroll.scrollTo(2950);
  };
  return (
    <Fragment>
      <div className="bg-base-white flex items-center px-24 pb-36 pt-40">
        <img
          src="/src/assets/top-image.svg"
          alt="top-image"
          className="flex-1"
        />
        <div className="flex-1 flex flex-col justify-center pl-10 gap-2">
          <Text text={TOP_MESSAGE["first"][language]} size="medium" />
          <div className="relative">
            <Text text={TOP_MESSAGE["second"][language]} size="large" />
            <Marker position={TEXT_POSITION[language]} size="normal" />
          </div>
          <Text text={TOP_MESSAGE["third"][language]} size="medium" />
          <IconLinks margin="10px 0" />
          <RoundedButton
            onClick={scrollTo}
            icon={<FontAwesomeIcon icon={faArrowRight} className="ml-2" />}
            text="Get In Touch"
            showAnimation
          />
        </div>
      </div>
      <div className="bg-wave block h-[200px] w-full" />
    </Fragment>
  );
};

export default TopArea;
