import {
  List,
  ListItemButton,
  ListItemIcon,
  Menu,
  MenuItem,
} from "@mui/material";
import { LANGUAGES_LIST, LINKS } from "../constants";
import { SyntheticEvent, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const isOpen = Boolean(anchorEl);
  const handleClick = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
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
        {LINKS.map((link, index) => {
          return (
            <ListItemButton
              key={index}
              sx={{ borderRadius: "5px", margin: "0 8px" }}
            >
              {link.EN}
            </ListItemButton>
          );
        })}
        <ListItemButton
          sx={{ borderRadius: "5px", margin: "0 8px" }}
          onClick={handleClick}
        >
          Language
          <FontAwesomeIcon
            icon={faCaretDown}
            className="ml-4 text-base-black"
          />
        </ListItemButton>
        <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
          {Object.values(LANGUAGES_LIST).map((value) => {
            if (Array.isArray(value)) {
              return value.map((text) => {
                return (
                  <MenuItem onClick={handleClose} key={text}>
                    {text}
                  </MenuItem>
                );
              });
            }
          })}
        </Menu>
      </List>
    </nav>
  );
};

export default Navbar;
