import { useForm } from "react-hook-form";
import SectionHeading from "./SectionHeading";
import { ContactFormValue } from "../types";
import Input from "../elements/Input";
import { CONTACT_TEXT, ERROR_MESSAGES, FORM_LABELS } from "../constants";
import { Fragment, useContext } from "react";
import ContentLanguage from "../store";
import RoundedButton from "../elements/button/RoundedButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-regular-svg-icons/faPaperPlane";
import Text from "../elements/Text";
import TextArea from "../elements/Input/TextArea";
import ErrorMessage from "../elements/ErrorMessage";
import { emailRegEx } from "../constants/regex";
import { Element } from "react-scroll";

const ContactForm = () => {
  const { language } = useContext(ContentLanguage);
  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<ContactFormValue>({
    defaultValues: {
      name: "",
      email: "",
      title: "",
      content: "",
    },
  });

  const onSubmit = (data: ContactFormValue) => {
    console.log(errors.name);
  };

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
            <form
              onSubmit={handleSubmit(onSubmit)}
              className=" bg-base-white w-[30vw] flex flex-col items-center rounded-xl p-10 ml-auto"
            >
              <Input<ContactFormValue>
                control={control}
                name="name"
                isValid={Boolean(errors.name)}
                label={FORM_LABELS["name"][language]}
              />
              <ErrorMessage<ContactFormValue> errors={errors} name="name" />
              <Input<ContactFormValue>
                control={control}
                name="email"
                label={FORM_LABELS["email"][language]}
                isValid={Boolean(errors.email)}
                rules={{
                  pattern: {
                    value: emailRegEx,
                    message: ERROR_MESSAGES["email"][language],
                  },
                }}
              />
              <ErrorMessage<ContactFormValue> errors={errors} name="email" />
              <Input<ContactFormValue>
                control={control}
                name="title"
                isValid={Boolean(errors.title)}
                label={FORM_LABELS["title"][language]}
              />
              <ErrorMessage<ContactFormValue> errors={errors} name="title" />
              <TextArea<ContactFormValue>
                control={control}
                name="content"
                isValid={Boolean(errors.content)}
                label={FORM_LABELS["content"][language]}
                rows={5}
              />
              <ErrorMessage<ContactFormValue> errors={errors} name="content" />
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
    </Fragment>
  );
};

export default ContactForm;
