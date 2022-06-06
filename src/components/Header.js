import React from "react";

function Header(props) {
  return (
    <div>
      <nav>
        <div className="nav-wrapper">
          <a href="#" class="left brand-logo">
            Emaily
          </a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li>
              <a href="http://localhost:5001/auth/google">Login with google+</a>
            </li>
           
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Header;
