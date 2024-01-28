import { Size } from "../types";

type PickedSize = Extract<Size, "small" | "normal">;

type Props = {
  position: string;
  size: PickedSize;
};

const MARKER_SIZE = new Map<PickedSize, string>([
  ["small", "w-24"],
  ["normal", "w-32"],
]);

const Marker = ({ position, size }: Props) => {
  return (
    <img
      src="src/assets/marker.svg"
      alt="marker"
      className={`absolute ${position} ${MARKER_SIZE.get(size) ?? ""}`}
    />
  );
};

export default Marker;
