import { MouseEventHandler, ReactNode } from "react";

type Props = {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  icon?: ReactNode;
};

const RoundedButton = ({
  text,
  onClick,
  type = "button",
  icon = null,
}: Props) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-base-yellow text-dark-blue rounded-full mt-8 py-3 w-52 text-xl transition ease-in-out duration-300 hover:translate-x-[14px] hover:bg-dark-yellow"
    >
      {text}
      {icon}
    </button>
  );
};

export default RoundedButton;
