import React from "react";
import style from "./Header.module.css";

function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg">
        <a class="navbar-brand" href="home">
          <img
            src="https://dcassetcdn.com/design_img/2445125/516906/516906_12819630_2445125_c1caf247_image.png"
            width="30"
            height="30"
            alt="Sab Tech Icon"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <a class="nav-link" href="home">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="about">
                About Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="contact">
                Contact Us
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="blog">
                Blog
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
