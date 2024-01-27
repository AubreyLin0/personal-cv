import { List, ListItemButton, Menu, MenuItem } from "@mui/material";
import { LANGUAGES_LIST, LINKS, MENU_TITLE } from "../constants";
import { SyntheticEvent, useContext, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons/faCaretDown";
import ContentLanguage from "../store";
import { Languages } from "../types";

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState<null | Element>(null);
  const { language, updateLanguage } = useContext(ContentLanguage);
  const isOpen = Boolean(anchorEl);

  const handleClick = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleChangeLan = (key: Languages) => () => {
    updateLanguage(key);
    handleClose();
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <nav className="px-5 py-3 flex justify-between bg-base-white">
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
              {link[language]}
            </ListItemButton>
          );
        })}
        <ListItemButton
          sx={{ borderRadius: "5px", margin: "0 8px" }}
          onClick={handleClick}
        >
          {MENU_TITLE[language]}
          <FontAwesomeIcon
            icon={faCaretDown}
            className="ml-4 text-base-black"
          />
        </ListItemButton>
        <Menu anchorEl={anchorEl} open={isOpen} onClose={handleClose}>
          {Object.entries(LANGUAGES_LIST).map(([languageKey, list]) => {
            if (language === languageKey) {
              return Object.entries(list).map(([key, text]) => {
                if (language !== key)
                  return (
                    <MenuItem
                      onClick={handleChangeLan(key as Languages)}
                      key={key}
                    >
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
