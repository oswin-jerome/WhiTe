import React from "react";
const NavBar = () => {
  return (
    <nav class="navbar shadow sticky-top navbar-expand-lg navbar-dark bg-dark d-flex">
      <a class="navbar-brand pl-lg-5 pl-sm-0 " href="#">
        WhiTe<span className="text-secondary">chnalogies</span>
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div
        class="collapse navbar-collapse d-lg-flex d-xl-flex justify-content-end "
        id="navbarNav"
      >
        <ul class="navbar-nav pr-5 ">
          <li class="nav-item  px-3">
            <a class="nav-link" href="#">
              Home <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item  px-3">
            <a class="nav-link" href="#About">
              About <span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#Products">
              Products<span class="sr-only">(current)</span>
            </a>
          </li>
          <li class="nav-item px-3">
            <a class="nav-link" href="#">
              Pricing
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
