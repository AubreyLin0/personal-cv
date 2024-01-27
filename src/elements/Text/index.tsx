type TextSize = "normal" | "medium" | "large";
type SizeClassName = "text-xl" | "text-4xl" | "text-6xl";
export type Props = {
  text: string;
  size: TextSize;
};

const SIZE_LIST = new Map<TextSize, SizeClassName>([
  ["normal", "text-xl"],
  ["medium", "text-4xl"],
  ["large", "text-6xl"],
]);

const Text = ({ size, text }: Props) => {
  const textSize = SIZE_LIST.get(size) ?? "";
  return <div className={`text-dark-blue ${textSize} my-2`}>{text}</div>;
};

export default Text;
