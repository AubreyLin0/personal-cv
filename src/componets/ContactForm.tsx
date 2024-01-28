import { useForm } from "react-hook-form";
import SectionHeading from "./SectionHeading";
import { ContactFormValue } from "../types";
import Input from "../elements/Input";
import { CONTACT_TEXT, FORM_LABELS } from "../constants";
import { useContext } from "react";
import ContentLanguage from "../store";
import RoundedButton from "../elements/button/RoundedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons/faPaperPlane";
import Text from "../elements/Text";

const ContactForm = () => {
  const { language } = useContext(ContentLanguage);
  const { handleSubmit, control } = useForm<ContactFormValue>({
    defaultValues: {
      name: "",
      email: "",
      title: "",
      content: "",
    },
  });

  const onSubmit = ({ data }: ContactFormValue) => {};
  return (
    <div className="py-10 flex flex-col items-center gap-5">
      <SectionHeading
        heading="Contact Me"
        position="left-[calc(28%+5px)] bottom-[calc(-20%+5px)]"
      />
      <div className="flex w-[80vw] mt-5 gap-5">
        <div className="flex-1">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className=" bg-base-white w-[30vw] flex flex-col items-center rounded-xl gap-8 py-10 px-10 ml-auto"
          >
            <Input<ContactFormValue>
              control={control}
              name="name"
              label={FORM_LABELS["name"][language]}
              rules={{}}
            />
            <Input<ContactFormValue>
              control={control}
              name="email"
              label={FORM_LABELS["email"][language]}
              rules={{}}
            />
            <Input<ContactFormValue>
              control={control}
              name="title"
              label={FORM_LABELS["title"][language]}
              rules={{}}
            />
            <Input<ContactFormValue>
              control={control}
              name="content"
              label={FORM_LABELS["content"][language]}
              rules={{}}
            />
            <RoundedButton
              text="SEND"
              type="submit"
              icon={<FontAwesomeIcon icon={faPaperPlane} className="ml-3" />}
            />
          </form>
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
  );
};

export default ContactForm;
