import Link from "@mui/material/Link";

type Props = {
  endpoint: string;
  imgPath: string;
  text: string;
};

const SlideContent = ({ endpoint, imgPath, text }: Props) => {
  return (
    <Link
      href={`https://aubreylin0.github.io/${endpoint}/`}
      target="_blank"
      rel="noreferrer"
      underline="none"
      sx={{ color: "black" }}
    >
      <img src={`./assets/${imgPath}`} alt={imgPath} />
      <h3 className="text-center mt-3 font-semibold">{text}</h3>
    </Link>
  );
};

export default SlideContent;
