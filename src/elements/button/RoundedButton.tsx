import { MouseEventHandler, ReactNode } from "react";

type Props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  icon?: ReactNode;
  showAnimation?: Boolean;
};

const RoundedButton = ({
  text,
  onClick = undefined,
  type = "button",
  icon = null,
  showAnimation = false,
}: Props) => {
  const animation = showAnimation
    ? "duration-300 hover:translate-x-[14px]"
    : "";
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-base-yellow font-semibold text-dark-blue rounded-full py-3 w-52 text-xl transition ease-in-out hover:bg-dark-yellow ${animation}`}
    >
      {text}
      {icon}
    </button>
  );
};

export default RoundedButton;
