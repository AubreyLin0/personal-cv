import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Fragment, useContext, useState } from "react";
import { useForm } from "react-hook-form";
import {
  ALERT_MESSAGES,
  FORM_LABELS,
  ERROR_MESSAGES,
  FORM_DEFAULT_VALUE,
} from "../constants";
import { emailRegEx } from "../constants/regex";
import TextArea from "../elements/Input/TextArea";
import RoundedButton from "../elements/button/RoundedButton";
import { AlertProps, ContactFormValue } from "../types";
import ContentLanguage from "../store";
import emailjs from "@emailjs/browser";
import Input from "../elements/Input";
import Snackbar from "../elements/Snackbar";
import ErrorMessage from "../elements/ErrorMessage";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const USER_ID = import.meta.env.VITE_USER_ID;

const ContactForm = () => {
  const [alertProps, setAlertProps] = useState<AlertProps>({
    isOpen: false,
    type: undefined,
    message: "",
  });
  const { language } = useContext(ContentLanguage);
  const { isOpen, type, message } = alertProps;
  const {
    handleSubmit,
    control,
    formState: { errors },
    reset,
  } = useForm<ContactFormValue>({
    defaultValues: FORM_DEFAULT_VALUE,
  });

  const onSubmit = async (data: ContactFormValue) => {
    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID);
      setAlertProps({
        isOpen: true,
        type: "success",
        message: ALERT_MESSAGES["success"][language],
      });
      reset();
    } catch (err) {
      console.log(err);
      setAlertProps({
        isOpen: true,
        type: "error",
        message: ALERT_MESSAGES["error"][language],
      });
    }
  };

  const handleClose = () => {
    setAlertProps((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <Fragment>
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
      <Snackbar
        isOpen={isOpen}
        type={type}
        message={message}
        handleClose={handleClose}
      />
    </Fragment>
  );
};

export default ContactForm;
