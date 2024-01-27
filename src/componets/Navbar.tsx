import { List, ListItemButton } from "@mui/material";
import { LINKS } from "../constants";

const Navbar = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="px-5 py-3 flex justify-between">
      <button
        className="text-dark-blue font-mercado font-extrabold text-5xl"
        onClick={scrollToTop}
      >
        Resume
      </button>
      <List sx={{ display: "flex" }}>
        {LINKS.map((link) => {
          return (
            <ListItemButton
              key={link.en}
              sx={{ borderRadius: "5px", margin: "0 8px" }}
            >
              {link.en}
            </ListItemButton>
          );
        })}
      </List>
    </nav>
  );
};

export default Navbar;
