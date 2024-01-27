type TextSize = "small" | "normal" | "medium" | "large";
type SizeClassName = "text-base" | "text-xl" | "text-4xl" | "text-6xl";

export type Props = {
  text: string;
  size: TextSize;
  extraStyle?: string;
};

const SIZE_LIST = new Map<TextSize, SizeClassName>([
  ["small", "text-base"],
  ["normal", "text-xl"],
  ["medium", "text-4xl"],
  ["large", "text-6xl"],
]);

const Text = ({ size, text, extraStyle = "" }: Props) => {
  const textSize = SIZE_LIST.get(size) ?? "";
  return (
    <h3 className={`text-dark-blue  my-2 ${textSize} ${extraStyle}`}>{text}</h3>
  );
};

export default Text;
