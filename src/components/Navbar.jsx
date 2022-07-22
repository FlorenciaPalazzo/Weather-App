import React from "react";

export default function Navbar() {
  return (
    <nav class="navbar  navbar-dark navbar-expand-lg bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand text-light " href="#">
          App Clima
        </a>
        <button
          class="navbar-toggler te"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon "></span>
        </button>
        <div class="collapse navbar-collapse " id="navbarNavAltMarkup">
          <div class="navbar-nav ms-auto ">
            <a
              class="nav-link "
              target="_blank"
              href="https://portfolio-palazzo-florencia.vercel.app/"
            >
              Visita mi portfolio
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
