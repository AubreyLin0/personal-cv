import React from "react";

const Navbar = () => {
  return (
    <nav className="px-5 py-3">
      <button
        className="text-dark-blue font-mercado font-extrabold text-5xl"
        //Scroll to the top of the page
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
      >
        Resume
      </button>

      {/* <NavLinks setLocal={props.setLocal} /> */}
    </nav>
  );
};

export default Navbar;
