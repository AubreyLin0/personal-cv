import Marker from "../elements/Marker";
import Text from "../elements/Text";

type Props = {
  heading: string;
};

const SectionHeading = ({ heading }: Props) => {
  return (
    <div className="relative">
      <Text text={heading} size="medium" extraStyle="font-semibold" />
      <Marker position="bottom-[calc(-20%+5px)]" size="small" />
    </div>
  );
};

export default SectionHeading;
