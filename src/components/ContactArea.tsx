import SectionHeading from "./SectionHeading";
import { CONTACT_TEXT } from "../constants";
import { Fragment, useContext } from "react";
import ContentLanguage from "../store";
import Text from "../elements/Text";
import { Element } from "react-scroll";
import ContactForm from "./ContactForm";

const ContactArea = () => {
  const { language } = useContext(ContentLanguage);

  return (
    <Fragment>
      <Element name="contact" className="h-16" />
      <div className="py-10 flex flex-col items-center gap-5">
        <SectionHeading
          heading="Contact Me"
          position="left-[calc(28%+5px)] bottom-[calc(-20%+5px)]"
        />
        <div className="flex w-[80vw] mt-5 gap-5">
          <div className="flex-1">
            <ContactForm />
          </div>
          <div className="flex-1 flex flex-col justify-center">
            <Text
              text={CONTACT_TEXT["title"][language]}
              size="normal"
              extraStyle="px-16"
            />
            <Text
              text={CONTACT_TEXT["content"][language]}
              size="small"
              extraStyle="whitespace-pre-line px-16"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ContactArea;
