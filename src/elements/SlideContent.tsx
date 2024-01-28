type Props = {
  endpoint: string;
  imgPath: string;
  text: string;
};

const SlideContent = ({ endpoint, imgPath, text }: Props) => {
  return (
    <a
      href={`https://aubreylin0.github.io/${endpoint}/`}
      target="_blank"
      rel="noreferrer"
    >
      <img src={`src/assets/${imgPath}`} alt={imgPath} />
      <h3 className="text-center mt-3 font-semibold">{text}</h3>
    </a>
  );
};

export default SlideContent;
