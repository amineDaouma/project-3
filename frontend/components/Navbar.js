import React from "react";
import Link from "next/link";
import Signup from "./Signup";
import Login from "./Login";

const Navbar = () => (
  <div>
    <Link href="signup">
      <a>Sign Up</a>
    </Link>
    <Link href="login">
      <a>Log In</a>
    </Link>
    <style jsx>
      {`
        div {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          background: white;
        }
        a {
          margin: auto 16px;
        }
      `}
    </style>
  </div>
);

export default Navbar;
