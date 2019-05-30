import React from "react";
import Link from "next/link";
import Signup from "../components/Signup";
import LoggedInUser from "../components/LoggedInUser";

const Home = () => (
  <div>
    <LoggedInUser />
    <Signup />
  </div>
);

export default Home;
