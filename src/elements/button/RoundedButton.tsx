import CircularProgress from "@mui/material/CircularProgress";
import { MouseEventHandler, ReactNode } from "react";

type Props = {
  text: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  type?: "button" | "submit";
  icon?: ReactNode;
  showAnimation?: boolean;
  isLoading?: boolean;
};

const RoundedButton = ({
  text,
  onClick = undefined,
  type = "button",
  icon = null,
  showAnimation = false,
  isLoading = false,
}: Props) => {
  const animation = showAnimation
    ? "duration-300 hover:translate-x-[14px]"
    : "";
  const backgroundColor = isLoading
    ? "bg-gray-400"
    : "bg-base-yellow hover:bg-dark-yellow";

  return (
    <button
      type={type}
      onClick={onClick}
      className={`flex items-center justify-center font-semibold text-dark-blue rounded-full py-3 w-52 text-xl transition ease-in-out ${animation} ${backgroundColor}`}
      disabled={isLoading}
    >
      {isLoading ? (
        <CircularProgress size={28} sx={{ color: "white" }} />
      ) : (
        <>
          {text}
          {icon}
        </>
      )}
    </button>
  );
};

export default RoundedButton;
