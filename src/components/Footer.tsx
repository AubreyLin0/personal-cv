import Text from "../elements/Text";
import IconLinks from "./IconLinks";

const Footer = () => {
  return (
    <footer className="h-[20vh] mt-10 bg-base-white flex flex-col justify-center items-center">
      <Text text="Aubrey Lin" size="normal" extraStyle="my-0" />
      <Text text="Frontend Engineer" size="small" extraStyle="my-0" />
      <IconLinks margin="5px 0" />
      <Text
        text="©Aubrey Lin. All rights reserved."
        size="small"
        extraStyle="my-0"
      />
    </footer>
  );
};

export default Footer;
