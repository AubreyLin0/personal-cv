import Marker from "../elements/Marker";
import Text from "../elements/Text";

type Props = {
  heading: string;
  position: string;
};

const SectionHeading = ({ heading, position }: Props) => {
  return (
    <div className="relative">
      <Text text={heading} size="medium" extraStyle="font-semibold" />
      <Marker position={position} size="small" />
    </div>
  );
};

export default SectionHeading;
