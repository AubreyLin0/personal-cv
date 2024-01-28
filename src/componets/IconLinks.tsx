import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "@mui/material";

type Props = {
  margin: string;
};

const IconLinks = ({ margin }: Props) => {
  return (
    <div className="flex gap-3">
      <Link
        href="https://github.com/AubreyLin0"
        sx={{ color: "black", margin }}
      >
        <FontAwesomeIcon icon={faGithub} size="xl" />
      </Link>
      <Link
        href="https://www.linkedin.com/in/yi-hsuan-lin-142585226"
        sx={{ color: "black", margin }}
      >
        <FontAwesomeIcon icon={faLinkedin} size="xl" />
      </Link>
    </div>
  );
};

export default IconLinks;
