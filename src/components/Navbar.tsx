import React from "react";

interface Props {
  navItems: string[];
  color: string;
}
export default function Navbar({ color, navItems }: Props) {
  // let navItem =  { navItems.map((navLink) => (<li key={navLink} className="dropdown-item">{navLink}</li>))};
  return (
    <div>
      <nav className={"navbar navbar-expand-lg bg-body-tertiary bg-" + color}>
        <div className="container-fluid">
          <a className="navbar-brand text-light" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              {navItems.map((navLink) => (
                <li key={navLink} className="nav-item text-light">
                    <a className="nav-link text-light active" aria-current="page" href="#"> {navLink} </a>
                </li>
              ))};

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
