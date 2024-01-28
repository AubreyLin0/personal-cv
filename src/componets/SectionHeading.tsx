import { Element } from "react-scroll";
import Marker from "../elements/Marker";
import Text from "../elements/Text";

type Props = {
  heading: string;
  position: string;
};

const SectionHeading = ({ heading, position }: Props) => {
  return (
    <Element className="relative" name={heading.toLowerCase()}>
      <Text text={heading} size="medium" extraStyle="font-semibold" />
      <Marker position={position} size="small" />
    </Element>
  );
};

export default SectionHeading;
